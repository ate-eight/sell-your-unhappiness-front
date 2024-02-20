import type { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading';

const meta = {
    title: 'Components/Text/Headline',
    component: Heading,
    parameters: {
        layout: 'padded',
    },
    //👇 Enables auto-generated documentation for the component story
    tags: ['autodocs'],
    argTypes: {
        text: {
            description: 'headline 태그 text',
        },
        color: {
            description: 'headline 태그 color 선택',
        },
        as: {
            description: 'heading html 태그 중에서 선택해야함 <br/> h1 또는 h2',
            options: ['h1', 'h2'],
            control: { type: 'radio' },
        },
    },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof Heading>;

export const Primary: Story = {
    args: {
        text: 'Heading1',
        color: '',
        as: 'h1',
    },
};

export const Secondary: Story = {
    args: {
        text: 'Heading2',
        color: '',
        as: 'h2',
    },
};
