import { useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import LocationBar from '../locationBar/LocationBar';

const ContentLayout = () => {
    const location = useLocation();
    const { id } = useParams();
    const navigate = useNavigate(); //변수 할당시켜서 사용

    let headerText = '';
    let asType = '';

    // 현재 경로에 따라 headerText, headerType 설정
    switch (location.pathname) {
        case '/contents/create':
            headerText = '글쓰기';
            asType = 'subtitle';
            break;
        case `/contents/${id}`:
            headerText = '글읽기';
            asType = 'back';
            break;
        case `/contents/${id}/comment`:
            headerText = '댓글';
            asType = 'back';
            break;
    }
    const handleMoveBack = useCallback(() => navigate(-1), []);

    return (
        <>
            <LocationBar
                location={headerText}
                as={asType}
                onRegister={function (): void {}}
                onBack={handleMoveBack}
            />
            <Outlet />
        </>
    );
};

export default ContentLayout;
