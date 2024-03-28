import { screen } from '@testing-library/react';

import { render } from '@/test/CustomRender';

import Header from './Header';

beforeEach(() => {
    render(<Header />);
});

describe('헤더 컴포넌트', () => {
    it('컴포넌트 정상 렌더링', () => {
        screen.getByText('로고');
    });
});
