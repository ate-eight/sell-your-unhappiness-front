import type { Meta, StoryObj } from '@storybook/react';

import Nav from './Nav';

const meta = {
    title: 'Components/Nav',
    component: Nav,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        LinkList: {
            description: 'link list 타입은 React Router 의 Path 타입을 참고하세요',
        },
    },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        LinkList: [
            { to: { pathname: '/Home', search: '', hash: '' }, loc: 'Home' },
            { to: { pathname: '/New', search: '', hash: '' }, loc: 'New' },
            { to: { pathname: '/Soldout', search: '', hash: '' }, loc: 'Sold Out' },
        ],
        onUrl: () => {
            console.log('이동');
        },
    },
};
