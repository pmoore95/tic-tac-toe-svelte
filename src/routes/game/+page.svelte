<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import '../../app.css';
	import Board from './components/board.svelte';
	import playerMarker from '$lib/stores/playerMarker';
	import cpuMarker from '$lib/stores/cpuMarker';
	import gameResult from '$lib/stores/gameResult';
	import { GameResult, type GameResultType } from '$lib/constants';
	import GameResultModal, {
		type GameResultModalProps
	} from '$lib/components/GameResultModal.svelte';
	import Marker from '$lib/components/Marker.svelte';

	if (browser && !$playerMarker) {
		goto('/');
	}

	const getGameResultText: (result: GameResultType) => GameResultModalProps = (
		result: GameResultType
	) => {
		if (result === GameResult.DRAW)
			return {
				title: "It's a draw!",
				message: 'Gameover. The board is filled with no winner determined.'
			};
		if (result === $playerMarker)
			return { title: 'You won!', message: 'Congratulations, you beat the CPU.' };
		return { title: 'You lost.', message: 'Hard luck, the CPU won.' };
	};
</script>

<div class="flex items-center">
	<div>
		<h1 class="font-dela-gothic text-white mb-8 text-3xl text-center">Tic Tac Toe</h1>
		<Board />
	</div>
	<div class="ml-8 grid grid-cols-2 gap-4">
		<div class="flex items-center">
			<h2 class="font-dela-gothic text-white text-2xl mr-4 text-right w-full">You:</h2>
		</div>
		<div class="w-[50px] h-[50px] bg-red-500 rounded-full p-2">
			<Marker type={$playerMarker} className="w-full !h-full" />
		</div>
		<div class="flex items-center">
			<h2 class="font-dela-gothic text-white text-2xl mr-4 text-right w-full">CPU:</h2>
		</div>
		<div class="w-[50px] h-[50px] bg-blue-500 rounded-full p-2">
			<Marker type={$cpuMarker} className="w-full !h-full" />
		</div>
	</div>
</div>

{#if $gameResult}
	<GameResultModal {...getGameResultText($gameResult)} />
{/if}
