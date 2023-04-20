<script lang="ts">
	import ReaderSetting from './ReaderSetting.svelte';
	import { MaxZoom, MinZoom } from '$lib/Utils/readerStore';
	import { register } from 'swiper/element/bundle';
	register();
	export let chapter: any;

	const config = {
		direction: 'horizontal',
		slidesPerView: 1,
		centeredSlides: true,
		pagination: true,
		navigation: true,
		mousewheel: true,
		grabCursor: true,
		zoom: {
			maxRatio: $MaxZoom,
			minRatio: $MinZoom
		}
	};
</script>

<!-- <div class="absolute bottom-0 p-10 left-0 z-20">
	<button class="">
		<i class="ti ti-settings text-4xl" />
	</button>
</div> -->
<div class="drawer">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<!-- Page content here -->
		<label for="my-drawer" class="btn m-10 bg-black drawer-button absolute bottom-0 left-0 z-20"
			><i class="ti ti-settings text-4xl" /></label
		>

		<swiper-container centeredSlides class="top-0 left-0 h-[100vh]" {...config}>
			{#each chapter as part}
				<swiper-slide>
					<div class="swiper-zoom-container w-full">
						<div class="h-full w-full swiper-zoom-target bg-black flex justify-center items-center">
							<img class="h-full" src={part.img} alt="" srcset="" />
							<!-- <img src="https://placeimg.com/1000/1000/animals?100" alt="" /> -->
						</div>
					</div>
				</swiper-slide>
			{/each}
		</swiper-container>
	</div>
	<div class="drawer-side">
		<label for="my-drawer" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-100 text-base-content">
			<div class="h-16" />
			<ReaderSetting />
		</ul>
	</div>
</div>
