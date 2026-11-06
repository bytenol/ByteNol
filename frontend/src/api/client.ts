import { ApiError } from "./client.error";
import type { ApiClientConfig, ApiRequestConfig, HttpMethod, QueryParams } from "./client.types";


function serializeParams(params?: QueryParams): string {
    if (!params) return "";

    const searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
        if (value === undefined || value === null) {
            continue;
        }

        if (Array.isArray(value)) {
            for (const item of value) {
                searchParams.append(key, String(item));
            }

            continue;
        }

        if (value instanceof Date) {
            searchParams.append(key, value.toISOString());
            continue;
        }

        searchParams.append(key, String(value));
    }

    const query = searchParams.toString();

    return query ? `?${query}` : "";
}


// ============================================================
// URL BUILDER
// ============================================================

function buildURL(
    baseURL: string,
    endpoint: string,
    params?: QueryParams
): string {
    const normalizedBase = baseURL.replace(/\/+$/, "");
    const normalizedEndpoint = endpoint.replace(/^\/+/, "");

    const url = `${normalizedBase}/${normalizedEndpoint}`;

    return `${url}${serializeParams(params)}`;
}


// ============================================================
// BODY HANDLING
// ============================================================

function isBodyInit(value: unknown): value is BodyInit {
    return (
        typeof value === "string" ||
        value instanceof Blob ||
        value instanceof FormData ||
        value instanceof URLSearchParams ||
        value instanceof ArrayBuffer ||
        ArrayBuffer.isView(value) ||
        value instanceof ReadableStream
    );
}

function prepareBody(
    body: unknown,
    headers: Headers
): BodyInit | null | undefined {
    if (body === undefined || body === null) {
        return body;
    }

    // FormData, Blob, strings, ArrayBuffer, etc.
    if (isBodyInit(body)) {
        return body;
    }

    // Ordinary JavaScript objects and arrays.
    if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
    }

    return JSON.stringify(body);
}


// ============================================================
// RESPONSE PARSER
// ============================================================

async function parseResponse<T>(response: Response, responseType: ResponseType): Promise<T> {
    if (
        response.status === 204 ||
        response.status === 205 ||
        responseType === "json" && !response.headers.get("Content-Type")?.includes("json")
    ) {
        if (response.status === 204 || response.status === 205) {
            return undefined as T;
        }
    }

    switch (responseType) {
        case "text":
            return (await response.text()) as T;

        case "blob":
            return (await response.blob()) as T;

        case "arrayBuffer":
            return (await response.arrayBuffer()) as T;

        case "json":
        default: {
            const text = await response.text();

            if (!text) {
                return undefined as T;
            }

            try {
                return JSON.parse(text) as T;
            } catch {
                return text as T;
            }
        }
    }
}


// ============================================================
// API CLIENT
// ============================================================

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

    // ----------------------------------------------------------
    // CORE REQUEST METHOD
    // ----------------------------------------------------------

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

        const url = buildURL(this.baseURL, endpoint, params);

        const headers = new Headers(this.defaultHeaders);

        // Apply request-specific headers.
        if (customHeaders) {
            new Headers(customHeaders).forEach((value, key) => {
                headers.set(key, value);
            });
        }

        // Default JSON accept header.
        if (!headers.has("Accept")) {
            headers.set("Accept", "application/json");
        }

        // JWT authentication.
        if (auth && this.getAccessToken) {
            const token = await this.getAccessToken();

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
        }

        const preparedBody = prepareBody(body, headers);

        // Request timeout and cancellation.
        const controller = new AbortController();

        const timeoutId =
            timeout > 0
                ? setTimeout(() => controller.abort(), timeout)
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

            // Unauthorized response.
            if (response.status === 401 && auth) {
                await this.onUnauthorized?.();
            }

            const data = await parseResponse<unknown>(
                response,
                responseType
            );

            if (!response.ok) {
                const errorMessage =
                    typeof data === "object" &&
                        data !== null &&
                        "detail" in data &&
                        typeof data.detail === "string"
                        ? data.detail
                        : `Request failed with status ${response.status}`;

                throw new ApiError(
                    errorMessage,
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
                    signal?.aborted
                        ? "Request was cancelled."
                        : "Request timed out or was aborted."
                );
            }

            throw error;
        } finally {
            if (timeoutId !== undefined) {
                clearTimeout(timeoutId);
            }

            signal?.removeEventListener("abort", abortHandler);
        }
    }


    // ----------------------------------------------------------
    // HTTP METHODS
    // ----------------------------------------------------------

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