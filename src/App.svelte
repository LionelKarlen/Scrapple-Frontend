<script lang="ts">
	import logo from './assets/Logo.png';
	import Router from './lib/components/Router.svelte';
	import 'carbon-components-svelte/css/white.css';
</script>

<main>
	<header>
		<img src={logo} alt="SCRAPPLE" />
		<hr />
	</header>
	<Router />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	img {
		max-width: 100%;
		height: auto;
	}
	hr {
		width: 83.33vw;
		color: #dfe4ea;
	}
	header {
		margin-bottom: 2%;
	}
</style>
