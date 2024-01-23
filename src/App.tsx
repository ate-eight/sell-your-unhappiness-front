import MainPage from '@pages/MainPage';
import LoginPage from '@pages/LoginPage';
import CreatePage from '@pages/contents/CreatePage';
import DetailPage from '@pages/contents/DetailPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage />}></Route>
                    <Route path='/login' element={<LoginPage />}></Route>
                    <Route path='/contents/create' element={<CreatePage />}></Route>
                    <Route path='/contents/:id' element={<DetailPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
