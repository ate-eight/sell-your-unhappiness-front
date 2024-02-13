import ContentLayout from '@components/layout/ContentLayout';
import MainLayout from '@components/layout/MainLayout';
import { ThemeProvider } from '@emotion/react';
import CommentPage from '@pages/contents/CommentPage';
import CreatePage from '@pages/contents/CreatePage';
import DetailPage from '@pages/contents/DetailPage';
import MainPage from '@pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoginPage from './pages/LoginPage';
import theme from './styles/theme';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path='/' element={<LoginPage />} />
                            <Route element={<MainLayout />}>
                                <Route path='/main' element={<MainPage />} />
                            </Route>
                            <Route element={<ContentLayout />}>
                                <Route path='/contents/create' element={<CreatePage />} />
                                <Route path='/contents/:id' element={<DetailPage />} />
                                <Route path='/contents/:id/comment' element={<CommentPage />} />
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
