import * as React from 'react';

const initialState: State = {
	remainingTime: 0,
	stage: 0,
	score: 0,
	isStarted: false,
	isGameOver: false,
};

type UseGameReturn = [
	state: State,
	dispatch: React.Dispatch<Action>,
];

const useGame = (): UseGameReturn => {
  const [state, dispatch] = React.useReducer(gameReducer, initialState);

	React.useEffect(() => {
		if (process.env.NODE_ENV === 'development') {
			console.log(state);
		}
	}, [state]);

	return [state, dispatch];
}

export default useGame;

export const gameReducer: React.Reducer<State, Action> = (state, action) => {
	switch (action.type) {
		case 'init': {
			return {
				remainingTime: 15000,
				stage: 1,
				score: 0,
				isStarted: true,
				isGameOver: false,
			};
		}
		case 'done': {
			return initialState;
		}
		case 'tick': {
			if (state.isStarted) {
				if (state.remainingTime <= 0) {
					return produce(state, { isStarted: true, isGameOver: true });
				}

				return produce(state, { remainingTime: state.remainingTime - 100 });
			}

			return state;
		}
		default: {
			throw new Error('invalid action');
		}
	};
};

interface State {
	remainingTime: number;
	stage: number;
	score: number;
	isStarted: boolean;
	isGameOver: boolean;
}

type Action =
  | { type: 'init' }
	| { type: 'done' }
	| { type: 'tick' }
;

const produce = <S>(state: S, newState: Partial<S>): S =>
  ({ ...state, ...newState });
