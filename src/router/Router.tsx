import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ContentLayout from '@/components/layout/ContentLayout';
import Layout from '@/components/layout/Layout';
import MainLayout from '@/components/layout/MainLayout';
import AlertPage from '@/pages/AlertPage';
import CommentPage from '@/pages/contents/CommentPage';
import CreatePage from '@/pages/contents/CreatePage';
import DetailPage from '@/pages/contents/DetailPage';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import MyPage from '@/pages/MyPage';
import NotFoundPage from '@/pages/NotFoundPage';

const Paths = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<LoginPage />} />
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
