import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

const meta = {
    title: 'Components/Header',
    component: Header,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => {
            return (
                <MemoryRouter>
                    <Story />
                </MemoryRouter>
            );
        },
    ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
