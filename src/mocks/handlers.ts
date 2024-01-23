import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('https://65ae0aec1dfbae409a73cbcd.mockapi.io/api/v1/test', () =>
        HttpResponse.json({ id: 'abc-123' }),
    ),
];
