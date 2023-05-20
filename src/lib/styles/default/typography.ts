import type {TypographyOptions} from '$lib';

const defaultOptions: TypographyOptions = {
    defaultProps: {
        size: 'medium',
        style: 'body',
    },
    variants: [
        {
            props: { style: 'display', size: 'small' },
            styles: {
                root: 'text-5xl font-bold',
            }
        },
        {
            props: { style: 'display', size: 'medium' },
            styles: {
                root: 'text-6xl font-bold',
            }
        },
        {
            props: { style: 'display', size: 'large' },
            styles: {
                root: 'text-7xl font-bold',
            }
        },
        {
            props: { style: 'headline', size: 'small' },
            styles: {
                root: 'text-2xl font-bold',
            }
        },
        {
            props: { style: 'headline', size: 'medium' },
            styles: {
                root: 'text-3xl font-bold',
            }
        },
        {
            props: { style: 'headline', size: 'large' },
            styles: {
                root: 'text-4xl font-bold',
            }
        },
        {
            props: { style: 'title', size: 'small' },
            styles: {
                root: 'text-base font-bold',
            }
        },
        {
            props: { style: 'title', size: 'medium' },
            styles: {
                root: 'text-lg font-bold',
            }
        },
        {
            props: { style: 'title', size: 'large' },
            styles: {
                root: 'text-xl font-bold',
            }
        },
        {
            props: { style: 'label', size: 'small' },
            styles: {
                root: 'text-xs font-medium',
            }
        },
        {
            props: { style: 'label', size: 'medium' },
            styles: {
                root: 'text-sm font-medium',
            }
        },
        {
            props: { style: 'label', size: 'large' },
            styles: {
                root: 'text-base font-medium',
            }
        },
        {
            props: { style: 'body', size: 'small' },
            styles: {
                root: 'text-sm'
            }
        },
        {
            props: { style: 'body', size: 'medium' },
            styles: {
                root: 'text-base'
            }
        },
        {
            props: { style: 'body', size: 'large' },
            styles: {
                root: 'text-lg'
            }
        }
    ]
};

export default defaultOptions;
