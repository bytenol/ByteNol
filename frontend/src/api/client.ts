// import { clearAccessToken, getAccessToken, setAccessToken } from "../utils/authUtils";

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
	throw new Error("VITE_API_URL is not defined.");
}

interface ApiOptions extends RequestInit {
	token?: string;
	skipAuthRefresh?: boolean;
}


export async function apiClient<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
	const { headers, skipAuthRefresh = false, ...requestOptions } = options;

	let response = await makeRequest(endpoint, requestOptions);
    
    
	return response.json();
}


export async function sendJsonRequest<iReq, iRes>(endPoint: string, 
    data: iReq, skipRefresh = false): Promise<iRes> {
   return await apiClient<iRes>(endPoint, {
        method: "POST",
        body: JSON.stringify(data),
        skipAuthRefresh: skipRefresh
    }) 
}


export async function sendGetRequest<iRes>(endPoint: string, skipAuthRefresh = false): Promise<iRes> {
    return await apiClient<iRes>(endPoint, {
        method: "GET",
        skipAuthRefresh
    });
}


async function makeRequest(endpoint: string, options: RequestInit): Promise<Response> {
    const { headers, ...requestOptions } = options;

    return fetch(`${API_URL}${endpoint}`, 
        {
		...requestOptions,
		headers: {
			"Content-Type": "application/json",
			...headers,
		},
		"credentials": "include"
	});
}