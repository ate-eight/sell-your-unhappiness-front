import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';

import CircleButton from './CircleButton';

const meta = {
    title: 'Components/CircleButton',
    component: CircleButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        iconName: {
            description: '버튼 아이콘 이름',
        },
        iconColor: {
            defaultValue: '#fff',
            description: '아이콘 컬러',
        },
        size: {
            defaultValue: 'lg',
            description: '버튼 사이즈 70px | 30px',
        },
        handleOnClick: {
            description: '버튼 이벤트',
        },
    },
} satisfies Meta<typeof CircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        iconName: 'i-edit-fill',
        size: 'lg',
        iconColor: '#fff',
        handleOnClick: () => alert('click'),
    },
};

export const Group: Story = {
    args: {
        iconName: 'i-edit-fill',
        size: 'lg',
        iconColor: '#fff',
        handleOnClick: () => alert('click'),
    },
    render: (args) => {
        const warrperCss = css`
            width: 100%;

            margin-bottom: 20px;

            & > div {
                margin-bottom: 8px;
                font-size: 18px;
                font-weight: 700;
            }
        `;

        return (
            <div style={{ width: '100%' }}>
                <div css={warrperCss}>
                    <div>lg size</div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <CircleButton {...args} />
                    </div>
                </div>
                <div css={warrperCss}>
                    <div>sm size</div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <CircleButton {...args} size='sm' />
                    </div>
                </div>
            </div>
        );
    },
};
