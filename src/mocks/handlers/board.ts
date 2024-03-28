import { http, HttpResponse } from 'msw';

import board from '../dummy/boards.json';
import empty_board from '../dummy/empty_boards.json';

export const getBoard = http.get('/api/v1/boards', async ({ request }) => {
    if (request.url === 'http://localhost:3000/api/v1/boards?type=%ED%9A%8C%EC%82%AC&page=1') {
        return HttpResponse.json(board, { status: 200 });
    }
    return HttpResponse.json(empty_board, { status: 200 });
});

export const getBoardButtonTypes = http.get('/api/v1/board/types', async () => {
    return HttpResponse.json(
        {
            data: {
                types: ['회사', '학교', '친구', '부모님', '세상'],
            },
        },
        { status: 200 },
    );
});
