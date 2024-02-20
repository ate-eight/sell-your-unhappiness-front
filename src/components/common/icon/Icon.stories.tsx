import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

const meta = {
    title: 'Components/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        name: 'i-back',
    },
};
