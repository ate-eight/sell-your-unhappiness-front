import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { render } from '@/test/CustomRender';

import Header from './Header';

beforeEach(() => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>,
    );
});

describe('헤더 컴포넌트', () => {
    it('컴포넌트 정상 렌더링', () => {
        screen.getByText('로고');
    });
});
