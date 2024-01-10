import type { PlayerType } from '$lib/constants';
import { writable } from 'svelte/store';

const playerTurn = writable<PlayerType>(undefined);

export const resetPlayerTurn = () => {
	playerTurn.set(undefined as unknown as PlayerType);
};

export default playerTurn;
