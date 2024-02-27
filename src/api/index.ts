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

export const fetchData = {
    get: async (url: string) => {
        const res = await axiosInstance(url);
        return res;
    },

    post: async (url: string, data: unknown) => {
        const res = await axiosInstance({
            method: 'post',
            url: url,
            data,
        });
        return res;
    },

    delete: async (url: string) => {
        const res = await axiosInstance({
            method: 'delete',
            url: url,
        });
        return res;
    },
};
