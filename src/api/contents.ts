import { useQuery } from '@tanstack/react-query';

import { fetchData } from '@/api';

export interface IContentResponse {
    id: number;
    type: string;
    status: string;
    title: string;
    content: string;
    createTime: string;
    modifiedTime: string;
}

export const CONTENT_API = {
    getDetail: async (id: number): Promise<IContentResponse> => {
        try {
            const response = await fetchData.get(`/v1/board/${id}`);
            const { data } = response.data;

            if (response.status === 200) {
                return data as IContentResponse;
            }
        } catch (error) {
            console.error(error);
        }
        throw new Error('Failed to fetch content detail');
    },
};

export const useContentsById = (id: number) => {
    return useQuery<IContentResponse, Error>({
        queryKey: ['contents', id],
        queryFn: () => CONTENT_API.getDetail(id),
    });
};
