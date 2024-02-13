import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'padded',
        viewport: {
            defaultViewport: 'responsive',
        },
    },

    argTypes: {
        placeholder: {
            description: 'input placeholder',
        },
        value: {
            description: 'input value',
        },
        as: {
            description: 'placeholder',
            options: ['Comment', 'Default'],
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: '댓글을 남겨보세요.',
        value: 'input value',
        as: 'Comment',
    },
};
export const Secondary: Story = {
    args: {
        placeholder: '댓글을 남겨보세요.',
        value: 'input value',
        as: 'Default',
    },
};
