<script lang="ts">
	import AnimeCard from '$lib/Components/AnimeCard.svelte';
	import Carousel from '$lib/Components/Carousel.svelte';
	import { gogoanime } from '$lib/gogoanime';

	async function getAnimes() {
		return await gogoanime.top_aired();
	}

	async function getRecentEpisodes() {
		return await gogoanime.recent_episodes();
	}
</script>

<div class="h-16" />

{#await getAnimes()}
	.....
{:then value}
	<Carousel animes={value} />
{:catch error}
	{error}
{/await}

{#await getRecentEpisodes()}
	waiting ...
{:then animes}
	<div class="flex mb-8 mt-4 justify-between items-center mx-[10%]">
		<div class="text-3xl font-extrabold">Recently Added Episodes :</div>
		<div>
			<a class="text-secondary-focus underline text-lg" href="/recently-added">Show More ...</a>
		</div>
	</div>
	<section class="grid gap-4 mx-[10%] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
		{#each animes.results as anime}
			<AnimeCard {anime} />
		{/each}
	</section>
{:catch error}
	<pre>{JSON.stringify(error, null, 2)}</pre>
{/await}
