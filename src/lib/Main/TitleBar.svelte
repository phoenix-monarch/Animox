<script lang="ts">
	import { appWindow } from '@tauri-apps/api/window';

	function close() {
		appWindow.close();
	}

	function minimize() {
		appWindow.minimize();
	}
	function maximize() {
		appWindow.toggleMaximize();
	}
</script>

<div data-tauri-drag-region class="flex justify-end bg-surface-100-700 select-none">
	<section />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<section>
		<button on:click={minimize} class="btn m-1 btn-square">
			<i class="ti ti-minus" />
		</button>

		<button on:click={maximize} class="btn m-1 btn-square">
			<i class="ti ti-maximize" />
		</button>

		<button on:click={close} class="btn m-1 btn-square">
			<i class="ti ti-x" />
		</button>
	</section>
</div>
