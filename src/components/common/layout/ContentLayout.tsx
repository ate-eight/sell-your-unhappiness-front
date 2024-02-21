import { Outlet } from 'react-router-dom';

const ContentLayout = () => {
    return (
        <div>
            <div>글쓰기</div>
            <Outlet />
        </div>
    );
};

export default ContentLayout;
