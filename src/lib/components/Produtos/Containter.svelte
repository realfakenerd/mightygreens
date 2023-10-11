<script>
	import Image from '../CTA/Image.svelte';
	import Product from './Product.svelte';
</script>

<section class="flex flex-col items-center bg-green-600 p-4 gap-4">
	<h1 class="text-headline-large font-medium text-white">Nossos produtos</h1>

	<ul class="flex flex-col md:flex-row gap-4">
		<Product src="/cogumelos/shiitake.webp" bg="/cogumelos/shiitake_lowres.webp" produto="Shiitake" />
		<Product src="/cogumelos/king_oyster.webp" bg="/cogumelos/king_oyster_lowres.webp" produto="King Oyster" />
		<Product src="/cogumelos/lions_mane.webp" bg="/cogumelos/lions_mane_lowres.webp" produto="Lions Mane" />
        <Product produto="Veja mais" />
	</ul>
</section>
