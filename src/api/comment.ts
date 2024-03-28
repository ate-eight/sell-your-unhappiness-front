import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import { fetchData } from '@/api';
import { queryClient } from '@/App';

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

export interface ICommentAdd {
    boardId: number;
    parentId?: number;
    content: string;
}

interface ICommentAddResponse {
    message: string;
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
    add: async (body: ICommentAdd) => {
        const response = await fetchData.post<ICommentAddResponse>(
            '/v1/board-comment',
            JSON.stringify(body),
        );
        return response.data;
    },
};

export const useCommentById = (id: number) => {
    return useSuspenseQuery<ICommentResponse, Error>({
        queryKey: ['comment', id],
        queryFn: () => COMMENT_API.getALL(id),
    });
};

export const useCommentAdd = () => {
    return useMutation({
        mutationFn: (body: ICommentAdd) => COMMENT_API.add(body),
        onSuccess: (res, variables) => {
            const { common } = res;
            if (common.code === 200) {
                /**
                 * 성공
                 * 기존 query key를 invalid로 만들어 reFetch
                 */
                queryClient.invalidateQueries({ queryKey: ['comment', variables.boardId] });
            } else {
                // 실패
                throw new Error(common.message);
            }
        },
    });
};
