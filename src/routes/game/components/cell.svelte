<script lang="ts">
	import { clsx } from 'clsx';
	import boardStore, { addMarker } from '$lib/stores/board';
	import playerMarker from '$lib/stores/playerMarker';
	import cpuMarker from '$lib/stores/cpuMarker';
	import { determineNextMove } from '$lib/utils/board-utils';
	import { MarkerEnum, type MarkerType } from '$lib/constants';
	import Marker from '$lib/components/Marker.svelte';
	import playerTurn from '$lib/stores/playerTurn';

	export let posX: number;
	export let posY: number;

	let marker: MarkerType | null;
	let styles: string;

	$: {
		(marker = $boardStore[posY][posX]),
			(styles = clsx(
				'border-x-4 border-transparent flex justify-center items-center w-[200px] h-[200px] focus-visible:outline focus-visible:outline-2 outline-yellow-500 rounded-sm',
				!marker && 'hover:bg-neutral-100',
				marker && 'disabled',
				marker === MarkerEnum.CIRCLE && 'bg-red-500 border-red-500',
				marker === MarkerEnum.CROSS && 'bg-blue-500 border-blue-500',
				posX === 1 && '!border-x-black'
			));
	}

	const onClick = () => {
		addMarker($playerMarker, posX, posY);

		playerTurn.set('CPU');
		const result = determineNextMove($boardStore, $cpuMarker);

		if (result !== null) {
			addMarker($cpuMarker, result.col, result.row);
			playerTurn.set('PLAYER');
		}
	};
</script>

<button class={styles} on:click={onClick} disabled={!!marker}>
	{#if marker}
		<Marker type={marker} className="w-2/4 !h-2/4" />
	{/if}
</button>
