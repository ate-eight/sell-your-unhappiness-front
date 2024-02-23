import { fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { render } from '@/test/CustomRender';

import MainPage from './MainPage';

describe('MainPage', () => {
    const setup = () => {
        const { container } = render(
            <BrowserRouter>
                <MainPage />
            </BrowserRouter>,
        );
        const navList = container.querySelectorAll('a');
        const LNB = container.querySelector('#slider');

        return { navList, LNB };
    };

    it('헤더의 링크가 3개 존재한다.', () => {
        const { navList } = setup();
        expect(navList.length).toEqual(3);
    });

    it('LNB 메뉴의 버튼을 클릭하면 해당 버튼이 ON 상태가 된다', async () => {
        const { LNB } = setup();

        const elements = LNB?.querySelectorAll('button');
        if (elements) {
            const el = window.getComputedStyle(elements[0]);
            const restElems = [...elements].filter((v) => v !== elements[0]);

            fireEvent.click(elements[0]);

            await expect(el.getPropertyValue('border')).toEqual('');
            await restElems?.forEach((element) => {
                const elem = window.getComputedStyle(element);
                expect(elem.getPropertyValue('border')).toEqual('1px solid #e4e4e4');
            });
        }
    });
});
