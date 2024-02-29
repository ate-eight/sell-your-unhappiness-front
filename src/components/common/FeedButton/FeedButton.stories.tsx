import type { Meta, StoryObj } from '@storybook/react';

import FeedButton from './FeedButton';

const meta = {
    title: 'Components/FeedButton',
    component: FeedButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        icon: { control: 'text' },
        color: { control: 'color' },
        count: { control: 'text' },
    },
} satisfies Meta<typeof FeedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        icon: 'i-message',
        color: '#b6b6b6',
        count: '1',
    },
};
