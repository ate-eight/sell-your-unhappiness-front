import type { Meta, StoryObj } from '@storybook/react';

import SubTitle from './SubTitle';

const meta = {
    title: 'Components/Text/SubTitle',
    component: SubTitle,
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
            description: 'headline 태그 text',
        },
        color: {
            description: 'headline 태그 color 선택',
        },
        as: {
            control: 'select',
            description: 'heading html 태그 중에서 선택해야함 <br/> h1 또는 h2',
            options: ['h3', 'h4'],
        },
    },
} satisfies Meta<typeof SubTitle>;

export default meta;
type Story = StoryObj<typeof SubTitle>;

export const Primary: Story = {
    args: {
        text: 'SubTitle1',
        color: '',
        as: 'h3',
    },
};

export const Secondary: Story = {
    args: {
        text: 'SubTitle2',
        color: '',
        as: 'h4',
    },
};
