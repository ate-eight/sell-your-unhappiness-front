import type { Meta, StoryObj } from '@storybook/react';

import Tab from './Tab';

const meta = {
    title: 'Components/Tab',
    component: Tab,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        buttonInfo: [
            {
                id: 0,
                title: '내가 작성한 글',
            },
            {
                id: 1,
                title: '내가 BUY한 글',
            },
        ],
    },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        buttonInfo: [
            {
                id: 0,
                title: '내가 작성한 글',
            },
            {
                id: 1,
                title: '내가 BUY한 글',
            },
        ],
    },
};
