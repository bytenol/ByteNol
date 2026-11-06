import { ApiError } from "./errors";
import { buildURL } from "./params";
import { parseResponse, getErrorMessage } from "./response";

import type {
	ApiClientConfig,
	ApiRequestConfig,
	HttpMethod,
} from "./types";


function isDirectBody(value: unknown): value is BodyInit {
	return (
		typeof value === "string" ||
		value instanceof Blob ||
		value instanceof FormData ||
		value instanceof URLSearchParams ||
		value instanceof ArrayBuffer ||
		ArrayBuffer.isView(value)
	);
}


function prepareBody(body: unknown, headers: Headers): BodyInit | null | undefined {
	if (body === undefined || body === null) {
		return body;
	}

	if (isDirectBody(body)) {
		return body;
	}

	if (!headers.has("Content-Type")) {
		headers.set("Content-Type", "application/json");
	}

	return JSON.stringify(body);
}


export class ApiClient {
	private readonly baseURL: string;
	private readonly defaultTimeout: number;
	private readonly defaultHeaders: Headers;

	private readonly getAccessToken?: ApiClientConfig["getAccessToken"];
	private readonly onUnauthorized?: ApiClientConfig["onUnauthorized"];

	constructor(config: ApiClientConfig) {
		this.baseURL = config.baseURL.replace(/\/+$/, "");
		this.defaultTimeout = config.timeout ?? 30000;
		this.defaultHeaders = new Headers(config.headers);

		this.getAccessToken = config.getAccessToken;
		this.onUnauthorized = config.onUnauthorized;
	}


	// ==========================================================
	// CORE REQUEST
	// ==========================================================

	async request<T = unknown>(
		endpoint: string,
		method: HttpMethod = "GET",
		config: ApiRequestConfig = {}
	): Promise<T> {

		const {
			params,
			body,
			responseType = "json",
			timeout = this.defaultTimeout,
			auth = true,
			headers: customHeaders,
			signal,
			...requestOptions
		} = config;

		const url = buildURL(
			this.baseURL,
			endpoint,
			params
		);

		const headers = new Headers(this.defaultHeaders);

		if (customHeaders) {
			new Headers(customHeaders).forEach((value, key) => {
				headers.set(key, value);
			});
		}

		if (!headers.has("Accept")) {
			headers.set("Accept", "application/json");
		}

		// Attach JWT access token.
		if (auth && this.getAccessToken) {
			const token = await this.getAccessToken();

			if (token) {
				headers.set(
					"Authorization",
					`Bearer ${token}`
				);
			}
		}

		const preparedBody = prepareBody(body, headers);

		// Timeout and cancellation.
		const controller = new AbortController();

		let timedOut = false;

		const timeoutId =
			timeout > 0
				? setTimeout(() => {
					timedOut = true;
					controller.abort();
				}, timeout)
				: undefined;

		const abortHandler = () => controller.abort();

		if (signal) {
			if (signal.aborted) {
				controller.abort();
			} else {
				signal.addEventListener("abort", abortHandler, {
					once: true,
				});
			}
		}

		try {
			const response = await fetch(url, {
				...requestOptions,
				method,
				headers,
				body: preparedBody,
				signal: controller.signal,
			});

			const data = await parseResponse<unknown>(
				response,
				responseType
			);

			if (!response.ok) {
				if (response.status === 401 && auth) {
					await this.onUnauthorized?.();
				}

				throw new ApiError(
					getErrorMessage(data),
					response.status,
					data,
					response.headers
				);
			}

			return data as T;

		} catch (error) {
			if (error instanceof ApiError) {
				throw error;
			}

			if (controller.signal.aborted) {
				throw new Error(
					timedOut
						? "The request timed out."
						: "The request was cancelled."
				);
			}

			throw error;

		} finally {
			if (timeoutId !== undefined) {
				clearTimeout(timeoutId);
			}

			signal?.removeEventListener(
				"abort",
				abortHandler
			);
		}
	}


	// ==========================================================
	// HTTP METHODS
	// ==========================================================

	get<T = unknown>(
		endpoint: string,
		config?: ApiRequestConfig
	): Promise<T> {
		return this.request<T>(endpoint, "GET", config);
	}


	post<T = unknown>(
		endpoint: string,
		body?: unknown,
		config?: ApiRequestConfig
	): Promise<T> {
		return this.request<T>(endpoint, "POST", {
			...config,
			body,
		});
	}


	put<T = unknown>(
		endpoint: string,
		body?: unknown,
		config?: ApiRequestConfig
	): Promise<T> {
		return this.request<T>(endpoint, "PUT", {
			...config,
			body,
		});
	}


	patch<T = unknown>(
		endpoint: string,
		body?: unknown,
		config?: ApiRequestConfig
	): Promise<T> {
		return this.request<T>(endpoint, "PATCH", {
			...config,
			body,
		});
	}


	delete<T = unknown>(
		endpoint: string,
		config?: ApiRequestConfig
	): Promise<T> {
		return this.request<T>(endpoint, "DELETE", config);
	}


	head(
		endpoint: string,
		config?: ApiRequestConfig
	): Promise<void> {
		return this.request<void>(endpoint, "HEAD", config);
	}


	options<T = unknown>(
		endpoint: string,
		config?: ApiRequestConfig
	): Promise<T> {
		return this.request<T>(endpoint, "OPTIONS", config);
	}
}
