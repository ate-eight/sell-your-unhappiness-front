import MainPage from '@pages/MainPage';
import { render } from '@testing-library/react';

describe('first test', () => {
    test('main page rendering', () => {
        render(<MainPage />);
    });

    test('first API test', async () => {
        const response = await fetch('https://65ae0aec1dfbae409a73cbcd.mockapi.io/api/v1/test');

        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
    });
});
