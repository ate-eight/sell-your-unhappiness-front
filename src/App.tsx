import { Global, ThemeProvider } from '@emotion/react';

import Router from './router/Router';
import reset from './styles/reset';
import theme from './styles/theme';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Global styles={reset} />
                <Router />
            </ThemeProvider>
        </>
    );
}

export default App;
