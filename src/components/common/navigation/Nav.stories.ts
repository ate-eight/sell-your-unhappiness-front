import type { Meta, StoryObj } from '@storybook/react';

import Nav from './Nav';

const meta = {
    title: 'Components/Nav',
    component: Nav,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        onHandleToggle: () => {
            console.log('이동');
        },
    },
};
