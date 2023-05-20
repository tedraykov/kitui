import type { DrawerOptions } from '$lib/types';

const defaultOptions: DrawerOptions = {
	defaultProps: {
        element: 'aside',
        variant: 'standard',
        open: false
	},
	variants: [
        {
            props: { variant: 'standard' },
            styles: {
                root: 'h-full w-64',
            }
        },
        {
            props: { variant: 'modal', open: true },
            styles: {
                root: 'absolute top-0 left-0 w-72 bg-slate-100 h-full overflow-hidden z-drawer transition-all duration-200',
                scrim: 'absolute w-screen h-screen bg-neutral-10/20',
            }
        }
	]
}

export default defaultOptions;
