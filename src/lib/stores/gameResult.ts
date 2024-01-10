import type { GameResultType } from '$lib/constants';
import { writable } from 'svelte/store';

const gameResult = writable<GameResultType>();

export const resetGameResult = () => {
	gameResult.set(undefined as unknown as GameResultType);
};

export default gameResult;
