<section>
	<div class="saiba-mais">
		<a href="/"> Saiba mais </a>
	</div>

	<div class="block md:hidden">
		<button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>
</section>

<style lang="postcss">
	section {
		@apply flex items-center gap-4;
	}

	.saiba-mais {
		@apply flex gap-4;
	}

	.saiba-mais a {
		@apply rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white shadow;
	}
</style>
