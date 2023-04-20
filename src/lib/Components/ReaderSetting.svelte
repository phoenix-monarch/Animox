<script lang="ts">
	import { MaxZoom } from '$lib/Utils/readerStore';
</script>

<div>
	<div class="flex gap-4 justify-center items-center">
		<label for="" class="text-xl font-black">Max Zoom</label>
		<input bind:value={$MaxZoom} class="input btn-outline" type="number" min="1" max="5" />
	</div>
</div>
