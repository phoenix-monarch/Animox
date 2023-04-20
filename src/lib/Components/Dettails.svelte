<script lang="ts">
	export let anime: any;
</script>

<div
	class="flex items-center flex-col text-center mt-14 mx-[10%] lg:text-start lg:flex-row lg:items-start"
>
	<div class="mr-[2.5%] mb-10 lg:mb-0">
		<img class="w-96 rounded-2xl shadow-2xl" src={anime.image} alt="" />
	</div>
	<div class="w-[70%] ml-[2.5%]">
		<header class="">
			<div class="font-extrabold text-3xl lg:text-4xl xl:text-6xl">
				{anime.title}
			</div>
			<div class="flex ml-2">
				<div class="my-4 mr-10 font-semibold text-lg">
					Type : <span class="font-bold">{anime.type}</span>
				</div>
				<div class="my-4 ml-10 font-semibold text-lg">
					Status : <span class="font-bold">{anime.status}</span>
				</div>
			</div>
			<div class="my-3 mx-2 font-semibold text-lg">
				Other Names : <span class="font-bold">{anime.otherName}</span>
			</div>

			{#each anime.genres as genre}
				<span class="badge p-5 rounded-md font-bold cursor-pointer mx-2 my-4 hover:bg-base-300">
					<span>{genre}</span>
				</span>
			{/each}
		</header>
		<div>
			<div class="font-semibold text-xl lg:text-2xl xl:text-3xl mx-2 my-4">Description :</div>
			<div class="mx-2 text-xl">{anime.description}</div>
		</div>
	</div>
</div>
