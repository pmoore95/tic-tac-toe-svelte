export const MarkerEnum = {
	CROSS: 'CROSS',
	CIRCLE: 'CIRCLE'
} as const;

export const OPPOSITE_MARKERS: Record<MarkerType, MarkerType> = {
	[MarkerEnum.CIRCLE]: MarkerEnum.CROSS,
	[MarkerEnum.CROSS]: MarkerEnum.CIRCLE
};

export type MarkerType = keyof typeof MarkerEnum;

export const GameResult = {
	...MarkerEnum,
	DRAW: 'DRAW'
} as const;

export type GameResultType = keyof typeof GameResult;

export const PlayerEnum = {
	PLAYER: 'PLAYER',
	CPU: 'CPU'
} as const;

export type PlayerType = keyof typeof PlayerEnum;
