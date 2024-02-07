import { Outlet } from 'react-router-dom';

import * as S from '../../pages/style';
import Header from '../Header/Header';

const MainLayout = () => {
    return (
        <S.Container>
            <Header />
            <Outlet />
        </S.Container>
    );
};

export default MainLayout;
