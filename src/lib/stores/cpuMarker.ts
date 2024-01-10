import type { MarkerType } from '$lib/constants';
import { writable } from 'svelte/store';

const cpuMarker = writable<MarkerType>(undefined);

export const resetCpuMarker = () => {
	cpuMarker.set(undefined as unknown as MarkerType);
};

export default cpuMarker;
