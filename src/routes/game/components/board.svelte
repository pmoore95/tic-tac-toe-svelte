<script>
	import Row from './row.svelte';
	import markerStore from '$lib/stores/playerMarker';
	import { MarkerEnum } from '$lib/constants';
	import boardStore, { addMarker } from '$lib/stores/board';
	import { determineNextMove } from '$lib/utils/board-utils';

	if ($markerStore === MarkerEnum.CIRCLE) {
		const result = determineNextMove($boardStore, MarkerEnum.CIRCLE);
		if (result !== null) addMarker(MarkerEnum.CROSS, result.col, result.row);
	}
</script>

<div class="bg-white rounded-lg drop-shadow-2xl p-8">
	<!-- eslint-disable-next-line @typescript-eslint/no-unused-vars -->
	{#each { length: 3 } as _, i}
		<Row posY={i} />
	{/each}
</div>
