import '@testing-library/jest-dom/vitest';

import { act, fireEvent, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';

import { server } from '@/mocks/server';
import { render } from '@/test/CustomRender';

import MainPage from './MainPage';

const IntersectionObserverMock = vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn(),
}));

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

describe('MainPage', async () => {
    const setup = async () => {
        const { container } = await render(<MainPage />);

        const nav = container.querySelector('#link');
        const LNB = container.querySelector('#slider');

        return { LNB, nav };
    };

    it('헤더의 링크가 3개 존재한다.', async () => {
        const { nav } = await setup();

        waitFor(() => {
            if (nav) {
                const navList = nav.querySelectorAll('a');
                expect(navList.length).toEqual(3);
            }
        });
    });

    it('데이터를 불러오기 전에는 기본 문구가 뜬다', async () => {
        await setup();
        const nowLoading = screen.getByText(/글이 존재하지 않습니다./);
        expect(nowLoading).toBeInTheDocument();
    });

    it('메인페이지 mount 시 board button type이 렌더링 되고, useInfiniteQuery 가 실행된댜', async () => {
        // const data = await screen.findByText(/학교/);

        await act(async () => {
            await setup();
            waitFor(() => {
                const button = screen.getByRole('button', { name: /학교/ });
                expect(button).toBeInTheDocument();

                expect(IntersectionObserver).toBe(IntersectionObserverMock);
                expect(IntersectionObserverMock).toHaveBeenCalled();
            });
        });
    });

    it('LNB 메뉴의 버튼을 클릭하면 해당 버튼이 ON 상태가 된다', async () => {
        const { LNB } = await setup();

        const elements = LNB?.querySelectorAll('button');
        if (elements) {
            const el = window.getComputedStyle(elements[0]);
            const restElems = [...elements].filter((v) => v !== elements[0]);

            fireEvent.click(elements[0]);

            expect(el.getPropertyValue('border')).toEqual('');
            restElems?.forEach((element) => {
                const elem = window.getComputedStyle(element);
                expect(elem.getPropertyValue('border')).toEqual('1px solid #e4e4e4');
            });
        }
    });

    it('메인페이지 mount 시 서버 요청에서 에러가 발생하면 에러 문구를 노출한다', async () => {
        await setup();
        server.use(
            http.get('/api/v1/board', async () => {
                return HttpResponse.json({ status: 500 });
            }),
        );

        act(() => {
            const error = screen.findByText(/에러가 발생하였습니다../);
            waitFor(() => expect(error).toBeInTheDocument());
        });
    });
});
