import { useSuspenseQuery } from '@tanstack/react-query';

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
            } else {
                throw new Error('Failed to fetch content detail');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};

export const useContentsById = (id: number) => {
    return useSuspenseQuery<IContentResponse, Error>({
        queryKey: ['contents', id],
        queryFn: () => CONTENT_API.getDetail(id),
        staleTime: 60000,
    });
};
