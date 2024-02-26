import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import * as S from './style';

const ContentLayout = () => {
    const location = useLocation();
    let headerText = '';

    // 현재 경로에 따라 headerText 설정
    switch (location.pathname) {
        case '/contents/create':
            headerText = '글쓰기';
            break;
        default:
            headerText = '글읽기';
    }
    return (
        <>
            <S.ContentsHeader>{headerText}</S.ContentsHeader>
            <Outlet />
        </>
    );
};

export default ContentLayout;
