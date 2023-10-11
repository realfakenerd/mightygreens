<script>
	import { CTA, NossosProdutos } from '$lib/components';
	import Image from '$lib/components/CTA/Image.svelte';
</script>

<svelte:head>
	<title>Mighty Greens</title>
</svelte:head>

<CTA />
<NossosProdutos />

<section class="flex flex-col md:flex-row gap-8 p-4">
    <Image class="w-full max-h-screen-half" src="/cogumelos_selvagens.webp" bg="/cogumelos_selvagens_lowres.webp"/>
    <div class="flex flex-col justify-center items-center gap-4 w-full">
        <h2 class="text-headline-medium">Por que ambiente controlado?</h2>
        <ul class="text-display-small text-green-600">
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
        list-style-image: url(marker.webp);
    }
</style>