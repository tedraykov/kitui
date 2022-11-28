<script>
	import { twMerge } from 'tailwind-merge';

	let _class = '';
	export { _class as class };
	const defaultStyles = 'min-h-[64px] md:min-h-[72px] flex items-center';
</script>

<nav
	class={twMerge(defaultStyles, _class)}
	{...$$restProps}
>
	<slot />
</nav>
