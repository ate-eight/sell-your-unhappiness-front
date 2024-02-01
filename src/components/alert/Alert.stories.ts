import type { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';

const meta = {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        text: {
            description: '누군가 제목글을 샀어요',
        },
        date: {
            description: '2024.01.01 12:00',
        },
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: '누군가 제목글을 샀어요',
        date: '2024.01.01 12:00',
        icon: {
            iconName: 'i-heart',
            iconColor: '#9747FF',
            iconText: 'buy',
        },
    },
};

export const Secondary: Story = {
    args: {
        text: '새로운 댓글이 달렸어요',
        date: '2024.01.01 12:00',
        icon: {
            iconName: 'i-message',
            iconText: '댓글',
        },
    },
};

export const Third: Story = {
    args: {
        text: '새로운 답글이 달렸어요',
        date: '2024.01.01 12:00',
        icon: {
            iconName: 'i-reply',
            iconText: '답글',
        },
    },
};
