<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	// @ts-ignore
	import Autoplay from 'embla-carousel-autoplay';

	export let animes: any;
	// @ts-ignore
	const autoplayOptions = { delay: 4000, rootNode: (emblaRoot) => emblaRoot.parentElement };
	const emblaConfig = { options: { loop: true }, plugins: [Autoplay(autoplayOptions)] };
</script>

<div class="embla" use:emblaCarouselSvelte={emblaConfig}>
	<div class="embla__container">
		{#each animes.results as anime, i}
			<div class="embla__slide">
				<section class="rounded-2xl mx-10 mt-6 px-8 pt-10 relative">
					<div
						style="background-image: url({anime.image})"
						class="h-96 top-0 left-0 w-full absolute bg-[url({anime.image})] bg-center bg-cover bg-no-repeat blur-md shadow-xl z-0"
					/>

					<section class="h-96 flex relative top-0 z-10">
						<img class="h-80 shadow-2xl rounded-xl" src={anime.image} alt="" />
						<div class="mx-6">
							<header class="font-bold">
								<h3 class="text-red-500 my-4">
									# Spotlight {i + 1}
								</h3>
								<div class="text-5xl font-extrabold">{anime.title}</div>
							</header>
							{#each anime.genres as genre}
								<span
									class="badge p-5 rounded-md font-bold cursor-pointer mx-2 my-4 hover:bg-base-300"
								>
									<span>{genre}</span>
								</span>
							{/each}
							<br />
							<a
								class="btn mx-4 my-4 font-semibold text-lg rounded-lg bg-success-content"
								href="/anime?anime={anime.id}"
							>
								Watch Now
							</a>
						</div>
					</section>
				</section>
			</div>
		{/each}
	</div>
</div>

<style>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}
</style>
