import { screen } from '@testing-library/react';

import { render } from '@/test/CustomRender';

import Header from './Header';

describe('헤더 컴포넌트', () => {
    test('컴포넌트 정상 렌더링', () => {
        render(<Header />);
        screen.getByText('로고');
    });
});
