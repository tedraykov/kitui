import type { DrawerOptions } from '$lib/types';

const defaultOptions: DrawerOptions = {
    defaultProps: {
        element: 'aside',
        variant: 'standard',
        direction: 'left',
        open: false
    },
    variants: [
        {
            props: {},
            styles: {
                root: 'overflow-hidden ease-in-out duration-200',
            }
        },
        {
            props: { open: false },
            styles: {
                root: 'h-full w-0 transition-width',
            }
        },
        {
            props: { variant: 'standard', open: true },
            styles: {
                root: 'h-full w-64 transition-width',
            }
        },
        {
            props: { variant: 'modal' },
            styles: {
                root: "fixed z-drawer bg-surface",
                scrim: "fixed top-0 left-0 w-screen h-screen z-drawer-scrim"
            }
        },
        {
            props: { variant: 'modal', open: true },
            styles: {
                root: '',
                scrim: 'bg-state-layer-on-surface-12',
            }
        },
        {
            props: {variant: 'modal', direction: 'left'},
            styles: {
                root: 'left-0 top-0 h-full w-64 rounded-r-xl',
            }
        },
        {
            props: { variant: 'modal', direction: 'left', open: false },
            styles: {
                root: 'w-0'
            }
        },
        {
            props: {variant: 'modal', direction: 'right'},
            styles: {
                root: 'right-0 top-0 h-full w-64 rounded-l-xl',
            }
        },
        {
            props: { variant: 'modal', direction: 'right', open: false },
            styles: {
                root: 'w-0'
            }
        },
        {
            props: {variant: 'modal', direction: 'bottom'},
            styles: {
                root: 'bottom-0 left-0 w-full max-h-[calc(100vh-64px)] px-4 rounded-t-xl',
            }   
        },
        {
            props: { variant: 'modal', direction: 'bottom', open: false },
            styles: {
                root: 'h-0'
            }
        },
    ]
}

export default defaultOptions;
