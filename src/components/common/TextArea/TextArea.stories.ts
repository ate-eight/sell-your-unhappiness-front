import type { Meta, StoryObj } from '@storybook/react';

import TextArea from './TextArea';

const meta = {
    title: 'Components/TextArea',
    component: TextArea,
    parameters: {
        layout: 'padded',
        viewport: {
            defaultViewport: 'responsive',
        },
    },

    argTypes: {
        placeholder: {
            description: 'TextArea placeholder',
        },
        value: {
            description: 'TextArea value',
        },
    },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
    args: {
        placeholder: '자세한 이야기를 들려주세요.',
        value: 'test',
    },
};
