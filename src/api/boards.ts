import { fetchData } from '.';

export interface IBoardProps {
    type?: string;
    status?: string;
    page: number;
}

export interface IPageValue {
    previous: number;
    totalPage: number;
    num: number;
    pageSize: number;
    block?: unknown;
    after: number;
    currentPage: number;
    totalElements: number;
}

export interface IBoardContent {
    id: number;
    type: string;
    status: string;
    title: string;
    content: string;
    createTime: string;
}

export interface IBoardResponse {
    pageValue: IPageValue;
    contents: Array<IBoardContent>;
}

export const getBoards: ({ type, status, page }: IBoardProps) => Promise<IBoardResponse> = async ({
    type,
    status,
    page,
}) => {
    try {
        const params = { type, status, page };

        const response = await fetchData.get<IBoardResponse>(`/v1/boards`, {
            params,
        });

        const { data } = response.data;

        if (response.status === 200) {
            return { pageValue: data?.pageValue || {}, contents: data?.contents || [] };
        }
    } catch (error) {
        console.error('Error occurred while fetching content detail:', error);
    }
    return { pageValue: {} as IPageValue, contents: [] as Array<IBoardContent> };
};
