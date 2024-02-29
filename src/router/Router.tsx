import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import ContentLayout from '@/components/common/layout/ContentLayout';
import Layout from '@/components/common/layout/Layout';
import MainLayout from '@/components/common/layout/MainLayout';
import Loading from '@/components/common/loading/Loading';
import authSelector from '@/store/selector/authSelector';

import PrivateRouter from './PrivateRouter';

const AlertPage = lazy(() => import('@/pages/AlertPage'));
const CommentPage = lazy(() => import('@/pages/contents/CommentPage'));
const CreatePage = lazy(() => import('@/pages/contents/CreatePage'));
const DetailPage = lazy(() => import('@/pages/contents/DetailPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const MainPage = lazy(() => import('@/pages/MainPage'));
const MyPage = lazy(() => import('@/pages/MyPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

const Paths = () => {
    const auth = useRecoilValue(authSelector);

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route
                    path='/'
                    element={auth.isLogin ? <Navigate replace to='/main' /> : <LoginPage />}
                />
                <Route element={<PrivateRouter isLogin={auth.isLogin} />}>
                    <Route element={<MainLayout />}>
                        <Route path='/main' element={<MainPage />} />
                    </Route>
                    <Route path='/mypage' element={<MyPage />} />
                    <Route path='/alert' element={<AlertPage />} />
                    <Route element={<ContentLayout />}>
                        <Route path='/contents/create' element={<CreatePage />} />
                        <Route path='/contents/:id' element={<DetailPage />} />
                        <Route path='/contents/:id/comment' element={<CommentPage />} />
                    </Route>
                </Route>

                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Paths />
            </Suspense>
        </BrowserRouter>
    );
};

export default Router;
