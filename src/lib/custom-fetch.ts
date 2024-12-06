import { toast } from 'sonner';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

type FetchOptions = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    body?: string;
    headers?: Record<string, string>;
    signal?: AbortSignal;
};
export const customFetch = async (
    url: string,
    options: FetchOptions
) => {
    const response = await fetch(BASE_URL + url, {
        method: options.method,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
            Authorization: `Bearer ${localStorage.getItem(
                'authToken'
            )}`,
        },
        signal: options.signal,
        body: options.body,
    });
    if (response.status === 419) {
        setTimeout(() => {
            localStorage.removeItem('authToken');
            window.location.href = '/login';
        }, 2000);
        toast.error('Session expired. Please login again.');
    }
    return response;
};