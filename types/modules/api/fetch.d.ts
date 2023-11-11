/**
 * @typedef {Object} FetchOptions
 * @property {"GET" | "PUT" | "POST" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD" | "CONNECT" | "TRACE"} [method] - Request method.
 * @property {Record<string, string>} [headers] - Request headers.
 * @property {"manual" | "follow"} [redirect] - Whether to follow redirects.
 * @property {number} [maxRedirects] - Maximum amount of redirects to be followed.
 * @property {AbortSignal} [signal] - Signal to abruptly cancel the request
 * @property {Uint8Array | string} [body] - Defines a request body. Data must be serializable.
 * @property {number} [timeout] - Request timeout time.
 */
/**
 * @param {string} url
 * @param {FetchOptions} options
 * @returns {Promise<FetchResponse>}
 */
export default function fetch(url: string, options?: FetchOptions): Promise<FetchResponse>;
export type FetchOptions = {
    /**
     * - Request method.
     */
    method?: "GET" | "PUT" | "POST" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD" | "CONNECT" | "TRACE" | undefined;
    /**
     * - Request headers.
     */
    headers?: Record<string, string> | undefined;
    /**
     * - Whether to follow redirects.
     */
    redirect?: "follow" | "manual" | undefined;
    /**
     * - Maximum amount of redirects to be followed.
     */
    maxRedirects?: number | undefined;
    /**
     * - Signal to abruptly cancel the request
     */
    signal?: AbortSignal | undefined;
    /**
     * - Defines a request body. Data must be serializable.
     */
    body?: string | Uint8Array | undefined;
    /**
     * - Request timeout time.
     */
    timeout?: number | undefined;
};
declare class FetchResponse extends Response {
    constructor(options: any);
    _options: any;
    get url(): any;
    get redirected(): any;
}
export {};
