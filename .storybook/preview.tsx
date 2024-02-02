import React from 'react';
import { ThemeProvider } from '@emotion/react';

import theme from '../src/styles/theme';

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
                <div style={{ minWidth: '475px' }}>
                    <ThemeProvider theme={theme}>
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
