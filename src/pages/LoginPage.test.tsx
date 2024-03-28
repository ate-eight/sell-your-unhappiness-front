import { screen } from '@testing-library/react';

import { render } from '@/test/CustomRender';

import LoginPage from './LoginPage';

describe('MainPage', () => {
    const setup = async () => await render(<LoginPage />);

    it('로고 이미지가 정상적으로 나오는가', async () => {
        await setup();

        const logoImage = screen.getByAltText('로고');
        expect(logoImage).toBeDefined();
    });

    it('구글 로그인 버튼이 있는가', async () => {
        await setup();

        const googleButton = screen.getByText('구글로 로그인');
        expect(googleButton).toBeDefined();
    });

    it('구글 아이콘이 정상적으로 나오는가', async () => {
        await setup();

        const googleIcon = screen.getByAltText('구글 로고');
        expect(googleIcon).toBeDefined();
    });
});
