import type { SwitchOptions } from '$lib';

const defaultOptions: SwitchOptions = {
	defaultProps: {},
	variants: [
        {
            props: {},
            styles: {
        		root: 'inline-flex items-center cursor-pointer group',
	        	thumb: `relative w-[3.25rem] h-8 bg-surface-container-highest 
			        box-border border-2 border-outline rounded-full
			        after:content-[''] after:absolute after:top-[6px] after:left-[6px] after:bg-outline
			        before:content-[''] before:absolute before:top-[-6px] before:left-[-6px] before:bg-none before:w-10 before:h-10 before:rounded-full
			        after:rounded-full after:h-4 after:w-4
			        group-hover:after:bg-on-surface-variant
			        group-hover:before:bg-[var(--kitui-color-state-layer-on-surface-8)]
			        group-active:after:bg-on-surface-variant group-active:after:scale-[1.75]
			        after:transition before:transition
			        peer-checked:bg-primary peer-checked:border-0
			        peer-checked:after:bg-on-primary
			        group-hover:peer-checked:after:bg-primary-container
			        peer-checked:after:scale-[1.5] peer-checked:after:translate-x-[22px] peer-checked:after:translate-y-[2px]
			        peer-checked:before:translate-x-[22px] peer-checked:before:translate-y-[2px]
		        `,
		        checkbox: 'sr-only peer'
            }
        }
    ],
};
export default defaultOptions;
