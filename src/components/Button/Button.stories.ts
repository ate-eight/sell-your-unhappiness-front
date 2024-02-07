import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            description: '버튼 텍스트',
        },
        color: {
            defaultValue: 'primary',
            description: '버튼 컬러',
        },
        full: {
            defaultValue: false,
            description: '버튼 width full size',
        },
        disabled: {
            defaultValue: false,
            description: '버튼 비활성화',
        },
        handleOnClick: {
            description: '버튼 클릭 이벤트',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Button',
        color: 'primary',
        handleOnClick: () => alert('click'),
        full: false,
        disabled: false,
    },
};

export const Secondary: Story = {
    args: {
        label: 'Button',
        color: 'secondary',
        handleOnClick: () => alert('click'),
        full: false,
        disabled: false,
    },
};
