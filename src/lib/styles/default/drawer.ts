import type { DrawerOptions } from '$lib/types';

const defaultOptions: DrawerOptions = {
	defaultProps: {
        element: 'aside',
        variant: 'standard',
        open: false
	},
	variants: [
        {
            props: { open: false },
            styles: {
                root: 'h-full w-0 overflow-hidden transition-width ease-in-out duration-200',
            }
        },
        {
            props: { variant: 'standard', open: true },
            styles: {
                root: 'h-full w-64 border-r border-outline-neutral transition-width ease-in-out duration-200',
            }
        },
        {
            props: { variant: 'modal', open: true },
            styles: {
                root: 'absolute top-0 left-0 w-72 bg-slate-100 h-full overflow-hidden z-drawer transition-all duration-200',
                scrim: 'absolute w-screen h-screen bg-black',
            }
        }
	]
}

export default defaultOptions;
