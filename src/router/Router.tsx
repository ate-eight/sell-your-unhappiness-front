import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import ContentLayout from '@/components/common/layout/ContentLayout';
import Layout from '@/components/common/layout/Layout';
import MainLayout from '@/components/common/layout/MainLayout';
import AlertPage from '@/pages/AlertPage';
import CommentPage from '@/pages/contents/CommentPage';
import CreatePage from '@/pages/contents/CreatePage';
import DetailPage from '@/pages/contents/DetailPage';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import MyPage from '@/pages/MyPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { authState } from '@/store/atom/authState';

const Paths = () => {
    const auth = useRecoilValue(authState);

    return (
        <Routes>
            <Route element={<Layout />}>
                {!auth.isLogin ? (
                    <Route path='/' element={<LoginPage />} />
                ) : (
                    <>
                        <Route path='/mypage' element={<MyPage />} />
                        <Route path='/alert' element={<AlertPage />} />
                        <Route element={<MainLayout />}>
                            <Route path='/main' element={<MainPage />} />
                        </Route>
                        <Route element={<ContentLayout />}>
                            <Route path='/contents/create' element={<CreatePage />} />
                            <Route path='/contents/:id' element={<DetailPage />} />
                            <Route path='/contents/:id/comment' element={<CommentPage />} />
                        </Route>
                    </>
                )}
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};

const Router = () => {
    return (
        <BrowserRouter>
            <Paths />
        </BrowserRouter>
    );
};

export default Router;
