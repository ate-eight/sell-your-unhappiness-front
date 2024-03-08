import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import Router from './router/Router';
import reset from './styles/reset';
import theme from './styles/theme';

function App() {
    const queryClient = new QueryClient();
    return (
        <>
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    <Global styles={reset} />
                    <QueryClientProvider client={queryClient}>
                        <Router />
                    </QueryClientProvider>
                </ThemeProvider>
            </RecoilRoot>
        </>
    );
}

export default App;
