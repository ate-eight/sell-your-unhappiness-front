import { Navigate, Outlet } from 'react-router-dom';

interface Props {
    isLogin: boolean;
}

const PrivateRouter = ({ isLogin }: Props) => {
    if (!isLogin) {
        return <Navigate replace to={'/'} />;
    }

    return <Outlet />;
};

export default PrivateRouter;
