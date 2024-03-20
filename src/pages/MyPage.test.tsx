import '@testing-library/jest-dom';

import { fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { render } from '@/test/CustomRender';

import MyPage from './MyPage';

describe('MyPage', () => {
    const setup = async () => {
        const { container, getByText } = await render(
            <BrowserRouter>
                <MyPage />
            </BrowserRouter>,
        );
        const myFeedHistory = container.querySelectorAll('li');
        const backButton = container.querySelector('#loc > button');

        return { myFeedHistory, backButton, getByText };
    };

    it('내 이력 버튼이 총 2개 존재한다.', async () => {
        const { myFeedHistory } = await setup();
        expect(myFeedHistory.length).toEqual(2);
    });

    it('close 버튼을 누르면 뒤로 이동한다.', async () => {
        const { backButton } = await setup();

        expect(backButton).toBeInTheDocument();

        fireEvent.click(backButton!);
    });
});
