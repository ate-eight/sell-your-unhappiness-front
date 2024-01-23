import { Outlet } from 'react-router-dom';

import * as S from '../../pages/style';

const ContentLayout = () => {
    return (
        <S.Container>
            <div>글쓰기</div>
            <Outlet />
        </S.Container>
    );
};

export default ContentLayout;
