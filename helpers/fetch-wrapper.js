
import md5 from 'md5';
export const fetchWrapper = {
    get: request('GET'),
};

function request(method) {
    return (url, body) => {
        const requestOptions = {
            method,
            params: {
                ts: 1,
                apikey: useRuntimeConfig().public.apiKeyPublic,
                hash: md5(1 + useRuntimeConfig().public.apiKeyPrivate + useRuntimeConfig().public.apiKeyPublic)
            }
        };
        if (body) {
            requestOptions.body = body;
        }
        return $fetch(`${useRuntimeConfig().public.apiBaseUrl}${url}`, requestOptions)
    }
}

// count
// limit
// offset
// total
// results
