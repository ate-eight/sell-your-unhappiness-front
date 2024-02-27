import { Link, Outlet } from 'react-router-dom';

interface Props {
    isLogin: boolean;
}

const PrivateRouter = ({ isLogin }: Props) => {
    return isLogin ? (
        <Outlet />
    ) : (
        <div>
            로그인이 필요한 페이지입니다. <Link to={'/'}>로그인 페이지</Link>
        </div>
    );
};

export default PrivateRouter;
