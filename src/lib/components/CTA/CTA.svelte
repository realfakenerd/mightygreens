<script>
	import Image from './Image.svelte';
</script>

<section>
	<div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
		<div class="side-container">
			<div class="text-side-container">
				<div class="text-side">
					<h2>Cogumelos como você nunca viu.</h2>

					<p>
						A MightyGreens é a primeira empresa brasileira de agricultura vertical em ambiente
						controlado (CEA). Produzimos desde 2016 tecnologias e processos sustentáveis para
						produção de alimentos locais, sem pesticidas, veganos e de alto valor nutricional
					</p>

					<div class="text-action">
						<a href="/"> Get Started Today </a>
					</div>
				</div>
			</div>

			<aside class="image-aside">
				<Image class="w-full" src="/shiitake_no_prato.webp" loading="lazy" decoding="async" useSrcset/>
				<Image class="w-full" src="/shiitakes_na_mesa.webp" loading="lazy" decoding="async" useSrcset/>
			</aside>
		</div>
	</div>
</section>

<style lang="postcss">
	.side-container {
		@apply flex flex-col gap-6;
	}

	.text-side-container {
		@apply bg-green-600 p-8 rounded flex items-center;
	}

	.text-side {
		@apply mx-auto max-w-xl text-center;
	}

	.text-side h2 {
		@apply text-headline-small font-medium text-white;
	}

	.text-side p {
		@apply hidden text-white/90 text-body-large;
	}

	.text-action {
		@apply mt-4;
	}

	.text-action a {
		transition-duration: 300ms;
		transition-property: color, background-color;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		@apply inline-block rounded-sm border border-white bg-white px-12 py-3 text-label-large text-green-700;
	}

	.text-action a:hover {
		@apply text-white bg-transparent;
	}

	.text-action a:focus {
		@apply outline-none ring ring-yellow-400;
	}

	.image-aside {
		@apply flex flex-row gap-2;
	}

	@media (min-width: 640px) {
		.text-side p {
			@apply mt-4 block;
		}
	}

	@media (min-width: 768px) {
		.side-container {
			@apply flex-row min-h-[70dvh];
		}

		.text-side-container {
			@apply p-12;
		}

		.text-side h2 {
			@apply text-headline-large;
		}

		.text-action {
			@apply mt-8;
		}

		.image-aside {
			@apply flex-col;
		}
	}

	@media (min-width: 1024px) {
		.text-side-container {
			@apply px-16 py-24;
		}

		.image-aside {
			@apply flex-row;
		}
	}
</style>
