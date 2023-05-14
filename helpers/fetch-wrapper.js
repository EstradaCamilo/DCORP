
export const fetchWrapper = {
    get: request('GET'),
};

function request(method) {
    return (url, body) => {
        const requestOptions = {
            method,
        };
        if (body) {
            requestOptions.body = body;
        }
        return $fetch(`${useRuntimeConfig().public.apiBaseUrl}${url}?apikey=${useRuntimeConfig().public.apiKeyPublic}`, requestOptions)
    }
}