<script lang="ts">
	import MangaReader from '$lib/Components/MangaReader.svelte';
	import { gogoanime } from '$lib/gogoanime';

	async function getChapter() {
		return await gogoanime.randomCh();
	}
</script>

{#await getChapter()}
	waiting ...
{:then chapter}
	<section class="relative">
		<MangaReader {chapter} />
	</section>
{:catch error}
	{error}
{/await}
