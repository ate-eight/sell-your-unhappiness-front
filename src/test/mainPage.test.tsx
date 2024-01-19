import MainPage from '@pages/MainPage';
import { render } from '@testing-library/react';

describe('first test', () => {
    test('main page rendering', () => {
        render(<MainPage />);
    });
});
