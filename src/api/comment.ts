import { useQuery } from '@tanstack/react-query';

import { fetchData } from '@/api';

export interface ICommentInfo {
    contents: string;
    id: number;
    parentId: number;
    content: string;
    createTime: string;
}

export interface ICommentResponse {
    contents: ICommentInfo[];
}

export const COMMENT_API = {
    getALL: async (id: number): Promise<ICommentResponse> => {
        try {
            const response = await fetchData.get(`/v1/board-comments?boardId=${id}`);
            const { data } = response.data;
            if (response.status === 200) {
                return data as ICommentResponse;
            }
        } catch (error) {
            console.error(error);
        }
        throw new Error('Failed to fetch content detail');
    },
};

export const useCommentById = (id: number) => {
    return useQuery<ICommentResponse, Error>({
        queryKey: ['comment', id],
        queryFn: () => COMMENT_API.getALL(id),
        staleTime: 1000 * 60 * 5,
    });
};
