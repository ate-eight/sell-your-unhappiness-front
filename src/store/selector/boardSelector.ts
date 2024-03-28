import { selector } from 'recoil';

import { fetchData } from '@/api';

interface IBoardTypeResponse {
    types: Array<string>;
}

const boardTypeSelector = selector({
    key: 'boardTypeSelector',
    get: async () => {
        const { data } = await fetchData.get<IBoardTypeResponse>('/v1/board/types');
        const boardList = data.data.types || [];
        console.log('boardList', boardList);
        return boardList;
    },
});

export default boardTypeSelector;
