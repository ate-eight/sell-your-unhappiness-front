import { fetchData } from '@/api';

export interface ICommentResponse {
    map(
        arg0: (
            commentData: ICommentResponse,
            idx: number,
        ) => import('@emotion/react/jsx-runtime').JSX.Element,
    ): unknown;
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

    return null;
};
