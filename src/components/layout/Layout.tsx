import { useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';

import * as S from './style';

const Layout = () => {
    useLayoutEffect(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        window.addEventListener('resize', () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    }, []);

    return (
        <S.Container>
            <Outlet />
        </S.Container>
    );
};

export default Layout;
