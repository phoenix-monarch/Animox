<script lang="ts">
	import TitleBar from '$lib/Main/TitleBar.svelte';
	import Navbar from '$lib/Main/Navbar.svelte';
	import '../app.postcss';
</script>

<header class="fixed z-10 w-full bg-base-300">
	<TitleBar />

	<!-- <Navbar /> -->
</header>
<main class="scrollbar-hide relative z-0 pt-20 overflow-hidden">
	<slot />
</main>

<style>
</style>
