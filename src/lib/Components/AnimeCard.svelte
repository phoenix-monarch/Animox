<script lang="ts">
	export let anime: any;
</script>

<div class="card bg-neutral shadow-xl">
	<a href="/anime?anime={anime.id}">
		<figure class="px-4 pt-4">
			<img class="rounded-xl" src={anime.image} alt="" />
		</figure>
	</a>
	<section class="card-body pb-2 pt-3">
		<div class="text-center text-xl font-bold">
			<a href="/anime?anime={anime.id}">
				{anime.title.length <= 30 ? anime.title : anime.title.slice(0, 30) + '...'}</a
			>
		</div>
	</section>
	<div
		class="badge badge-sm py-4 xl:badge-md hover:badge-ghost font-bold cursor-pointer rounded shadow-xl absolute top-0 right-0"
	>
		Episode : {anime.episodeNumber}
	</div>
</div>
