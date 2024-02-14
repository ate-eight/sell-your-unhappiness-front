import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';

import theme from '../src/styles/theme';
import reset from '../src/styles/reset';

import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => {
            return (
                <div style={{ minWidth: '390px' }}>
                    <ThemeProvider theme={theme}>
                        <Global styles={reset} />
                        <BrowserRouter>
                            <Story />
                        </BrowserRouter>
                    </ThemeProvider>
                </div>
            );
        },
    ],
};

export default preview;
