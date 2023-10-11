<script lang="ts">
	import { blur } from '$lib/actions';

	export let src: string;
	export let bg: null | string = null;
	export let loading: 'lazy' | 'eager' = 'lazy';
</script>

<figure
	use:blur
	class="blur-load animate-pulse {$$props.class ?? ''}"
	style:background-image={`url(${bg ?? ''})`}
>
	<img alt="Sopa shiitake" class="{$$props.class ?? ''}" {src} {loading} />
</figure>

<style lang="postcss">
	figure, img {
		@apply h-full rounded-lg;
	}

	img {
		@apply w-full object-cover object-center;
		aspect-ratio: 1 / 1;
	}

	.blur-load {
		@apply bg-cover bg-center;
	}

	.blur-load img {
		opacity: 0;
		will-change: opacity;
	}
</style>
