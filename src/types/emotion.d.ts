import '@emotion/react';

import theme from '../styles/theme';

type ExtendedTheme = typeof theme;

declare module '@emotion/react' {
    export interface Theme extends ExtendedTheme {}
}
