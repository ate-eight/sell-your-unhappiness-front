import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import MainPage from './MainPage';

describe('MainPage', () => {
    it('main page rendering', () => {
        render(
            <BrowserRouter>
                <MainPage />
            </BrowserRouter>,
        );
    });

    // it('nav link exists',()=>{
    //     const
    // })
});
