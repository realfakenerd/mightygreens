<script lang="ts">
	export let src: string;
	export let loading: 'lazy' | 'eager' = 'eager';
	export let decoding: 'sync' | 'async' = 'sync';
	export let alt = '';
	export let useSrcset = false;

	const img = src.split('.');

	const srcset = `
	/400${img[0]}_400.webp 400w,
	/800${img[0]}_800.webp 800w,
	/1080${img[0]}_1080.webp 1080w
	`;
	console.log(srcset);
</script>

<figure class={$$props.class ?? ''}>
	<img
		{alt}
		srcset={useSrcset ? srcset : ''}
		sizes="(max-width: 639px) 400px, ((min-width: 640px) and (max-width: 1023px)) 800px"
		class={$$props.class ?? ''}
		{src}
		{loading}
		{decoding}
	/>
</figure>

<style lang="postcss">
	figure,
	img {
		@apply h-full rounded-lg;
	}

	img {
		@apply w-full object-cover object-center;
		aspect-ratio: 5 / 3;
	}
</style>
