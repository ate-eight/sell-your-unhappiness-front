import { fetchData } from '@/api';

export interface IContentResponse {
    type: string;
    status: string;
    title: string;
    content: string;
    createTime: string;
    modifiedTime: string;
}

export const getContentDetail = async (id: number) => {
    try {
        const response = await fetchData.get<IContentResponse>(`/v1/board/${id}`);
        const { data } = response.data;

        if (response.status === 200) {
            return data;
        }
    } catch (error) {
        console.error('Error occurred while fetching content detail:', error);
    }
};
