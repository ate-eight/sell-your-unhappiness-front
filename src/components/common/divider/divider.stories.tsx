import type { Meta, StoryObj } from '@storybook/react';

import Divider from './divider';

const meta = {
    title: 'Components/Divider',
    component: Divider,
    parameters: {
        size: 6,
        color: 300,
    },
    argTypes: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 6,
        color: 300,
    },
};
