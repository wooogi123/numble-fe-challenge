import type { State } from './types';

export const INITIAL_TIME = 15000;
export const DEDUCT_TIME = 3000;
export const LAST_STAGE = 25;

export const INITIAL_STATE: State = {
	remainingTime: 0,
	stage: 0,
	score: 0,
	isStarted: false,
	isGameOver: false,
	isClear: false,
};
