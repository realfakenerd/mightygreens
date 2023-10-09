<script lang="ts">
	import routes from './routes';
</script>

<nav aria-label="Global">
	<ul>
		{#each routes as { href, label } (href)}
			<li>
				<a  {href}>{label}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	nav {
		@apply hidden;
	}

	ul {
		@apply flex items-center gap-6 text-sm;
	}

    a {
        @apply text-gray-500 transition-colors;
    }

    a:hover {
        @apply text-green-600/75;
    }

	@media (min-width: 768px) {
		nav {
			@apply block;
		}
	}
</style>
