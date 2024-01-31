import type { Meta, StoryObj } from '@storybook/react';

import CaptionTag from './CaptionTag';

const meta = {
    title: 'Components/Text/CaptionTag',
    component: CaptionTag,
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
            description: 'caption 태그 text',
        },
        color: {
            description: 'caption 태그 color 선택',
        },
        as: {
            control: 'select',
            description: 'caption 태그 중에서 text 사이즈 선택',
            options: ['M', 'S'],
        },
    },
} satisfies Meta<typeof CaptionTag>;

export default meta;
type Story = StoryObj<typeof CaptionTag>;

export const Primary: Story = {
    args: {
        text: 'CaptionTag',
        color: '',
        as: 'M',
    },
};

export const Secondary: Story = {
    args: {
        text: 'CaptionTag',
        color: '',
        as: 'S',
    },
};
