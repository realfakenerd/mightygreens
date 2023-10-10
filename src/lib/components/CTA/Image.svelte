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
	<img alt="Sopa shiitake" {src} {loading} />
</figure>

<style lang="postcss">
	figure {
		@apply h-40 rounded-lg;
	}

	img {
		@apply h-40 rounded-lg w-full object-cover object-center;
		aspect-ratio: 9 / 16;
	}

	.blur-load {
		@apply bg-cover bg-center;
	}

	.blur-load img {
		opacity: 0;
		will-change: opacity;
	}

	@media (min-width: 640px) {
		img,
		figure {
			@apply h-56;
		}
	}

	@media (min-width: 768px) {
		img,
		figure {
			@apply h-full;
		}
	}
</style>
