import { Link, Outlet } from 'react-router-dom';

interface Props {
    isLogin: boolean;
}

const PrivateRouter = ({ isLogin }: Props) => {
    return isLogin ? (
        <Outlet />
    ) : (
        <>
            <h1>로그인이 필요한 페이지입니다.</h1>
            <Link to={'/'}>로그인 페이지</Link>
        </>
    );
};

export default PrivateRouter;
