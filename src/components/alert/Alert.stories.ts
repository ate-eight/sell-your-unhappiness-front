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
    },
};
