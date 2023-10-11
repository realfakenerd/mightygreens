<script>
	import Links from './Links.svelte';
	import Logo from './Logo.svelte';
	import SaibaMais from './SaibaMais.svelte';
</script>

<header class="p-1">
	<div class="bg-green-200 rounded-lg mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<Logo />

			<Links />

			<SaibaMais />
		</div>
	</div>
</header>
