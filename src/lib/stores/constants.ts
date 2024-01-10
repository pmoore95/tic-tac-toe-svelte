import type { MarkerType } from '$lib/constants';

type BoardRow = [MarkerType | null, MarkerType | null, MarkerType | null];

export type BoardStore = [BoardRow, BoardRow, BoardRow];
