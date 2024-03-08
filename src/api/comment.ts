import { fetchData } from '@/api';

export interface ICommentResponse {
    id: number;
    parentId: number;
    content: string;
    createTime: string;
    contents: [];
}

export const getComment = async (id: number) => {
    try {
        const response = await fetchData.get<ICommentResponse>(`/v1/board-comments?boardId=${id}`);
        const { data } = response.data;
        if (response.status === 200) {
            return data;
        }
    } catch (error) {
        console.error('Error occurred while fetching content detail:', error);
    }
};
