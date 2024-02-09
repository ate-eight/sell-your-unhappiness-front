import type { Meta, StoryObj } from '@storybook/react';

import CircleButton from './CircleButton';

const meta = {
    title: 'Components/CircleButton',
    component: CircleButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        handleOnClick: {},
    },
} satisfies Meta<typeof CircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { handleOnClick: () => alert('click') },
};
