import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import LocationBar from '../locationBar/LocationBar';

const ContentLayout = () => {
    const location = useLocation();
    let headerText = '';
    let asType = '';

    // 현재 경로에 따라 headerText, headerType 설정
    switch (location.pathname) {
        case '/contents/create':
            headerText = '글쓰기';
            asType = 'subtitle';
            break;
        default:
            headerText = '글읽기';
            asType = 'back';
    }
    return (
        <>
            <LocationBar
                location={headerText}
                as={asType}
                onRegister={function (): void {}}
                onBack={function (): void {}}
            />
            <Outlet />
        </>
    );
};

export default ContentLayout;
