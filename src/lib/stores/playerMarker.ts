import type { MarkerType } from '$lib/constants';
import { writable } from 'svelte/store';

const playerMarker = writable<MarkerType>(undefined);

export const resetPlayerMarker = () => {
	playerMarker.set(undefined as unknown as MarkerType);
};

export default playerMarker;
