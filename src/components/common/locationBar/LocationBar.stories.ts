import type { Meta, StoryObj } from '@storybook/react';

import LocationBar from './LocationBar';

const meta = {
    title: 'Components/LocationBar',
    component: LocationBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        location: {
            description: '현재 위치',
        },
        as: {
            options: ['subtitle', 'back', 'all'],
        },
    },
} satisfies Meta<typeof LocationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        location: '텍스트',
        onRegister: () => {
            console.log('등록API');
        },
        onBack: () => {
            console.log('뒤로');
        },
        as: 'all',
    },
};
export const Secondary: Story = {
    args: {
        location: '텍스트',
        onRegister: () => {
            console.log('등록API');
        },
        onBack: () => {
            console.log('뒤로');
        },
        as: 'back',
    },
};
export const Tertiary: Story = {
    args: {
        location: '텍스트',
        onRegister: () => {
            console.log('등록API');
        },
        onBack: () => {
            console.log('뒤로');
        },
        as: 'subtitle',
    },
};
