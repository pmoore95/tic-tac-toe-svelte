import { GameResult, type MarkerType } from '$lib/constants';
import { writable } from 'svelte/store';
import gameResult from './gameResult';
import { determineWinner, isBoardFull } from '$lib/utils/board-utils';
import { type BoardStore } from './constants';

const getInitialBoard: () => BoardStore = () => [
	[null, null, null],
	[null, null, null],
	[null, null, null]
];

// export const winner =
const boardStore = writable<BoardStore>(getInitialBoard());

export const addMarker = (marker: MarkerType, posX: number, posY: number) => {
	boardStore.update((board) => {
		board[posY][posX] = marker;
		return board;
	});
};

boardStore.subscribe((board) => {
	const winner = determineWinner(board);
	if (winner) gameResult.set(winner);
	if (isBoardFull(board)) gameResult.set(GameResult.DRAW);
});

export const resetBoardStore = () => {
	boardStore.set(getInitialBoard());
};

export default boardStore;
