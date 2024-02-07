import React from 'react';
import { ThemeProvider } from '@emotion/react';

import theme from '../src/styles/theme';

import type { Preview } from '@storybook/react';

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
                        <Story />
                    </ThemeProvider>
                </div>
            );
        },
    ],
};

export default preview;
