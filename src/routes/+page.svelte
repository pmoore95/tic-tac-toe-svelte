<script lang="ts">
	import Marker from '$lib/components/Marker.svelte';
	import { goto } from '$app/navigation';
	import playerMarker, { resetPlayerMarker } from '$lib/stores/playerMarker';
	import { MarkerEnum, OPPOSITE_MARKERS, type MarkerType, PlayerEnum } from '$lib/constants';
	import cpuMarker from '$lib/stores/cpuMarker';
	import { onMount } from 'svelte';
	import { resetGameResult } from '$lib/stores/gameResult';
	import { resetBoardStore } from '$lib/stores/board';
	import playerTurn from '$lib/stores/playerTurn';

	const selectMarker = (marker: MarkerType) => {
		playerMarker.set(marker);
		cpuMarker.set(OPPOSITE_MARKERS[marker]);
		playerTurn.set(marker === MarkerEnum.CROSS ? PlayerEnum.PLAYER : PlayerEnum.CPU);
		goto('/game');
	};

	onMount(() => {
		resetGameResult();
		resetBoardStore();
		resetPlayerMarker();
	});
</script>

<h1 class="font-dela-gothic text-white text-3xl mb-8 text-center">Tic Tac Toe</h1>
<div class="w-50 bg-white p-10 rounded-lg drop-shadow-2xl">
	<h2 class="font-md mb-8 text-xl text-center">Select your Marker:</h2>
	<div class="flex gap-10">
		<button
			class="bg-red-500 w-[100px] h-[100px] p-2 rounded-lg hover:opacity-25"
			on:click={() => selectMarker(MarkerEnum.CIRCLE)}
		>
			<Marker type={MarkerEnum.CIRCLE} className="w-full !h-full" />
		</button>
		<button
			class="bg-blue-500 w-[100px] h-[100px] p-2 rounded-lg hover:opacity-25"
			on:click={() => selectMarker(MarkerEnum.CROSS)}
		>
			<Marker type={MarkerEnum.CROSS} className="w-full !h-full" />
		</button>
	</div>
</div>
