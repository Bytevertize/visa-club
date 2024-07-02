import type { Meta, StoryObj } from '@storybook/react'
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { Badge } from '@repo/ui'
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Atoms/Badge',
    component: Badge,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        inline: {
            description: 'Specify it should render as a `span` or `div` tag',
            type: 'boolean',
        },
        isOutlined: {
            description: 'Specify if it should have only outline',
            type: 'boolean',
        },
        children: {
            description: 'Specify what to render',
            type: 'string',
        },
        size: {
            options: ['lg', 'md', 'sm', 'sx'],
            control: { type: 'select' },
        },
        variant: {
            options: ['primary', 'secondary', 'neutral', 'ghost', 'accent'],
            control: { type: 'select' },
        },
        leftIcon: {
            options: ['Cap Icon', 'None'],
            control: { type: 'select' },
            mapping: {
                'Cap Icon': <AcademicCapIcon />,
                None: undefined,
            },
        },
        rightIcon: {
            options: ['Cap Icon', 'None'],
            control: { type: 'select' },
            mapping: {
                'Cap Icon': <AcademicCapIcon />,
                None: undefined,
            },
        },
    },
    args: {
        inline: false,
        isOutlined: false,
        children: 'info',
    },
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        size: 'lg',
        variant: 'primary',
        inline: false,
    },
}

export const Neutral: Story = {
    args: {
        size: 'lg',
        variant: 'neutral',
    },
}

export const Secondary: Story = {
    args: {
        size: 'lg',
        variant: 'secondary',
    },
}

export const Accent: Story = {
    args: {
        size: 'lg',
        variant: 'accent',
    },
}

export const Ghost: Story = {
    args: {
        size: 'lg',
        variant: 'ghost',
    },
}

export const Large: Story = {
    args: {
        size: 'lg',
        variant: 'primary',
    },
}

export const Medium: Story = {
    args: {
        size: 'md',
        variant: 'primary',
    },
}

export const Small: Story = {
    args: {
        size: 'sm',
        variant: 'primary',
    },
}

export const ExtraSmall: Story = {
    args: {
        size: 'sx',
        variant: 'primary',
    },
}
