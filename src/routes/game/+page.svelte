<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import '../../app.css';
	import Board from './components/board.svelte';
	import playerMarker from '$lib/stores/playerMarker';
	import gameResult from '$lib/stores/gameResult';
	import { GameResult, type GameResultType } from '$lib/constants';
	import GameResultModal, {
		type GameResultModalProps
	} from '$lib/components/GameResultModal.svelte';
	import Players from './components/players.svelte';

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
	<Players/>
</div>

{#if $gameResult}
	<GameResultModal {...getGameResultText($gameResult)} />
{/if}
