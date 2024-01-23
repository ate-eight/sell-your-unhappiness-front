import ContentLayout from '@components/layout/ContentLayout';
import MainLayout from '@components/layout/MainLayout';
import CommentPage from '@pages/contents/CommentPage';
import CreatePage from '@pages/contents/CreatePage';
import DetailPage from '@pages/contents/DetailPage';
import LoginPage from '@pages/LoginPage';
import MainPage from '@pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' element={<LoginPage />}></Route>
                    <Route element={<MainLayout />}>
                        <Route path='/' element={<MainPage />}></Route>
                    </Route>
                    <Route element={<ContentLayout />}>
                        <Route path='/contents/create' element={<CreatePage />}></Route>
                        <Route path='/contents/:id' element={<DetailPage />}></Route>
                        <Route path='/contents/:id/comment' element={<CommentPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
