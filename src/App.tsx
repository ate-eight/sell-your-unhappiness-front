import { ThemeProvider } from '@emotion/react';

import Router from './router/Router';
import theme from './styles/theme';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Router />
            </ThemeProvider>
        </>
    );
}

export default App;
