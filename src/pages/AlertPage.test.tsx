import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';

import { render } from '@/test/CustomRender';

import AlertPage from './AlertPage';

describe('AlertPage', () => {
    const setup = () => {
        const { container, getByText } = render(
            <BrowserRouter>
                <AlertPage />
            </BrowserRouter>,
        );

        const alertList = container.querySelectorAll('#alert-item');

        return { alertList, getByText };
    };

    it('알림 목록이 존재한다.', () => {
        const { alertList } = setup();
        alertList.forEach((alert) => {
            expect(alert).toBeInTheDocument();
        });
    });
});
