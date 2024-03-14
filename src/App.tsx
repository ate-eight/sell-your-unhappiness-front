import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import Router from './router/Router';
import reset from './styles/reset';
import theme from './styles/theme';

export const queryClient = new QueryClient();
function App() {
    return (
        <>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider theme={theme}>
                        <Global styles={reset} />
                        <Router />
                    </ThemeProvider>
                </QueryClientProvider>
            </RecoilRoot>
        </>
    );
}

export default App;
