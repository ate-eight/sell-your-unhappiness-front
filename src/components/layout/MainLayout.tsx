import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as S from '../../pages/style';

const MainLayout = () => {
    return (
        <S.Container>
            <div>
                <Link to='/'>
                    <h1>로고</h1>
                </Link>
                <div>
                    <span>
                        <img src='/src/images/header_01.png' alt='' />
                    </span>
                    <span>
                        <img src='/src/images/header_02.png' alt='' />
                    </span>
                </div>
            </div>
            <Outlet />
        </S.Container>
    );
};

export default MainLayout;
