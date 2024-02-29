import { Global, ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';

import Router from './router/Router';
import reset from './styles/reset';
import theme from './styles/theme';

function App() {
    return (
        <>
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    <Global styles={reset} />
                    <Router />
                </ThemeProvider>
            </RecoilRoot>
        </>
    );
}

export default App;
