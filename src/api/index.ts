import axios from 'axios';

const prodMode = import.meta.env.PROD;
const BASE_URL = prodMode ? 'http://3.39.74.150:8080' : '/api';

/**
 * 커스텀 axios 인스턴스 생성
 * token, baseUrl, header 공통 처리
 */
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * 서버로 요청시 token을 헤더에 추가
 */
axiosInstance.interceptors.request.use((config) => {
    config.headers['authorization'] = 'Bearer ' + localStorage.getItem('access-token');
    config.headers['refresh-token'] = localStorage.getItem('refresh-token');
    return config;
});

interface IFetchResponse<T> {
    common: {
        code: number;
        message: string;
        success: boolean;
    };
    data: T;
}

export const fetchData = {
    get: async <T>(url: string) => {
        const res = await axiosInstance<IFetchResponse<T>>(url);
        return res;
    },

    post: async <T>(url: string, data: unknown) => {
        const res = await axiosInstance<IFetchResponse<T>>({
            method: 'post',
            url: url,
            data,
        });
        return res;
    },

    put: async <T>(url: string, data: unknown) => {
        const res = await axiosInstance<IFetchResponse<T>>({
            method: 'put',
            url: url,
            data,
        });
        return res;
    },

    delete: async <T>(url: string) => {
        const res = await axiosInstance<IFetchResponse<T>>({
            method: 'delete',
            url: url,
        });
        return res;
    },
};
