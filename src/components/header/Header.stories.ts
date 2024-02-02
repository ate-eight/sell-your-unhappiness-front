import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const meta = {
    title: 'Components/Header',
    component: Header,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            description: `
            **타입**을 골라서 지정해야함 
                1. Navigation<br/>
                - 이동이 가능 link 리스트 보유
                2. Header
                - 로고가 있는 메인 header
                3. Location
                - 현재 위치 정보 및 뒤로 이동가능 
            `,
            options: ['Navigation', 'Header', 'Location'],
            control: { type: 'radio' },
        },
        logoUrl: {
            description: '로고 이미지 url 경로',
        },
        LinkList: {
            description: 'link list 타입은 Link Props',
        },
        location: {
            description: '현재 위치',
        },
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        type: 'Navigation',
        LinkList: [
            { to: { pathname: '/Home', search: '', hash: '' }, loc: 'Home' },
            { to: { pathname: '/New', search: '', hash: '' }, loc: 'New' },
            { to: { pathname: '/Soldout', search: '', hash: '' }, loc: 'Sold Out' },
        ],
    },
};

export const Secondary: Story = {
    args: {
        type: 'Location',
        location: '텍스트',
    },
};

export const Third: Story = {
    args: {
        type: 'Header',
    },
};
