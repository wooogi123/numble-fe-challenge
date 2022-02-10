import * as React from 'react';
import {
  INITIAL_TIME,
  DEDUCT_TIME,
  LAST_STAGE,
} from './constants';

const initialState: State = {
  remainingTime: 0,
  stage: 0,
  score: 0,
  isStarted: false,
  isGameOver: false,
  isClear: false,
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
        remainingTime: INITIAL_TIME,
        stage: 1,
        score: 0,
        isStarted: true,
        isGameOver: false,
        isClear: false,
      };
    }
    case 'done': {
      return initialState;
    }
    case 'tick': {
      if (!state.isStarted) return state;

      if (state.remainingTime < action.payload) {
        return produce(state, {
          remainingTime: 0,
          isGameOver: true,
          isClear: false,
        });
      }

      const remainingTime = Math.max(Math.floor(state.remainingTime - action.payload), 0);
      return produce(state, { remainingTime });
    }
    case 'nextStage': {
      if (!state.isStarted) return state;
      if (state.isGameOver) return state;
      if (state.stage >= LAST_STAGE) return produce(state, { isClear: true });

      return produce(state, {
        remainingTime: INITIAL_TIME,
        stage: state.stage + 1,
        score: Math.pow(state.stage, 3) * state.remainingTime,
      });
    }
    case 'deduct': {
      if (!state.isStarted) return state;
      if (state.isGameOver) return state;

      if (state.remainingTime < DEDUCT_TIME) {
        return produce(state, { remainingTime: 0, isGameOver: true });
      }

      return produce(state, {
        remainingTime: state.remainingTime - DEDUCT_TIME,
      });
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
  isClear: boolean;
}

type Action =
  | { type: 'init' }
  | { type: 'done' }
  | { type: 'tick', payload: number }
  | { type: 'nextStage' }
  | { type: 'deduct' }
;

const produce = <S>(state: S, newState: Partial<S>): S =>
  ({ ...state, ...newState });
