import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';

import { render } from './CustomRender';

// test utils file
export const renderWithRouter = (
    ui,
    { route = '/mypage', history = createMemoryHistory({ initialEntries: ['/', route] }) } = {},
) => {
    return {
        user: userEvent.setup(),
        ...render(ui, { wrapper: BrowserRouter }),
        history,
    };
};
