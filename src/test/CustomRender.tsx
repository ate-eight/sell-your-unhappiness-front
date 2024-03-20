import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, RenderOptions } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import theme from '../styles/theme';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient();
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>{children}</BrowserRouter>
                </QueryClientProvider>
            </ThemeProvider>
        </RecoilRoot>
    );
};

const renderWithCustomStyled = async (ui: React.ReactElement, options?: RenderOptions) =>
    await act(() => render(ui, { wrapper: Wrapper, ...options }));

export { renderWithCustomStyled as render };
