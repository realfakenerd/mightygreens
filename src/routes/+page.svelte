<script>
	import { CTA, NossosProdutos } from '$lib/components';
	import Image from '$lib/components/CTA/Image.svelte';
</script>

<svelte:head>
	<title>Mighty Greens</title>
</svelte:head>

<section class="relative bg-[url(/shiitake_hero.jpg)] bg-cover bg-center bg-no-repeat min-h-screen">
	<div
		class="absolute inset-0 bg-lime-100/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-lime-100/95 sm:to-lime-100/25"
	/>

	<div
		class="relative mx-auto max-w-screen-xl px-4 sm:px-6 flex min-h-screen items-center lg:px-8"
	>
		<div class="max-w-xl">
			<h1 class="text-display-large text-center sm:text-left">
				Cultivando
				<strong class="block text-green-700">Futuro Melhor</strong>
			</h1>

			<div class="mt-8 flex flex-wrap gap-4 text-center">
				<a
					href="#saiba-mais"
					class="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
				>
                    Fale Conoco
				</a>
			</div>
		</div>
	</div>
</section>

<CTA />
<NossosProdutos />

<section class="flex flex-col md:flex-row gap-8 p-4">
	<Image
		class="w-full max-h-screen-half"
		src="/cogumelos_selvagens.webp"
		bg="/cogumelos_selvagens_lowres.webp"
	/>
	<div class="flex flex-col justify-center items-center gap-4 w-full">
		<h2 class="text-title-large">Por que ambiente controlado?</h2>
		<ul class="text-headline-small text-green-600">
			<li>Produtos muito frescos</li>
			<li>Localmente produzidos</li>
			<li>Menos uso de água</li>
			<li>Zero pesticidas</li>
			<li>100% de previsibilidade</li>
			<li>Produção vegana</li>
		</ul>
	</div>
</section>

<style>
    li {
        list-style-image: url(/marker.webp);
    }
</style>