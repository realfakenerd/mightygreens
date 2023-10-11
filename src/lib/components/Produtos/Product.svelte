<script lang="ts">
	import Image from '../CTA/Image.svelte';
	export let src: string | null = null;
	export let bg: string | null = null;
	export let produto: string;
</script>

<li class="flex flex-col bg-slate-100 rounded-md p-2 items-center justify-center w-full">
	{#if src}
		<Image {src} {bg} />
		<h2 class="text-title-large">{produto}</h2>
	{:else}
		<a class="text-title-large hover:text-green-600" href="/produtos">{produto}</a>
	{/if}
</li>
