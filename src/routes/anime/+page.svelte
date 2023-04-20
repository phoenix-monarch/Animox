<script lang="ts">
	import Dettails from '$lib/Components/Dettails.svelte';
	import { page } from '$app/stores';
	import { gogoanime } from '$lib/gogoanime';
	$: id = $page.data.id;

	async function getAnimeInfo() {
		return await gogoanime.anime_info(id);
	}
</script>

{#await getAnimeInfo()}
	waiting ...
{:then anime}
	<Dettails {anime} />
{:catch error}
	error ...
{/await}
