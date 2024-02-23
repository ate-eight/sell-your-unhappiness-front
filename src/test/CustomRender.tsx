import { ThemeProvider } from '@emotion/react';
import { render, RenderOptions } from '@testing-library/react';

import theme from '../styles/theme';

const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const renderWithCustomStyled = (ui: React.ReactElement, options?: RenderOptions) =>
    render(ui, { wrapper: Wrapper, ...options });

export { renderWithCustomStyled as render };
