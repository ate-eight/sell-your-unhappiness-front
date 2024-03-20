import { fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

// import { server } from '@/mocks/browser';
import { render } from '@/test/CustomRender';

import MainPage from './MainPage';

describe('MainPage', () => {
    const setup = async () => {
        const { container } = await render(
            <RecoilRoot>
                <MainPage />
            </RecoilRoot>,
        );
        const navList = container.querySelectorAll('a');
        const LNB = container.querySelector('#slider');

        return { navList, LNB };
    };

    it('헤더의 링크가 3개 존재한다.', async () => {
        const { navList } = await setup();
        expect(navList.length).toEqual(3);
    });

    it('LNB 메뉴의 버튼을 클릭하면 해당 버튼이 ON 상태가 된다', async () => {
        const { LNB } = await setup();

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

            // server.use(
            //     http.get('/v1/boards', (req, res, ctx) => {
            //         if(req)
            //         return res.once(
            //             ctx.json({
            //                 message: 'you fail',
            //             }),
            //             ctx.status(401),
            //             ctx.delay(20),
            //         );
            //     }),
            // );
        }
    });
});
