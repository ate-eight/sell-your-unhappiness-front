import type { Meta, StoryObj } from '@storybook/react';

import ContentTag from './ContentTag';

const meta = {
    title: 'Components/Text/ContentTag',
    component: ContentTag,
    parameters: {
        layout: 'padded',
        viewport: {
            defaultViewport: 'responsive',
        },
    },
    //👇 Enables auto-generated documentation for the component story
    tags: ['autodocs'],
    argTypes: {
        text: {
            description: 'content 태그 text',
        },
        color: {
            description: 'content 태그 color 선택',
        },
        as: {
            control: 'select',
            description: 'content 태그 중에서 text 사이즈 선택',
            options: ['M', 'S'],
        },
    },
} satisfies Meta<typeof ContentTag>;

export default meta;
type Story = StoryObj<typeof ContentTag>;

export const Primary: Story = {
    args: {
        text: 'ContentTag',
        color: '',
        as: 'M',
    },
};

export const Secondary: Story = {
    args: {
        text: 'ContentTag',
        color: '',
        as: 'S',
    },
};
