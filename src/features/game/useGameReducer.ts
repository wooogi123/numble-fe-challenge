import * as React from 'react'
import { produce } from './utils';
import {
	INITIAL_TIME,
	LAST_STAGE,
	DEDUCT_TIME,
	INITIAL_STATE,
} from './constants';
import type { State, Action } from './types';

const gameReducer: React.Reducer<State, Action> = (state, action) => {
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
			return INITIAL_STATE;
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
	}
};

const useGameReducer = () => React.useReducer(gameReducer, INITIAL_STATE);

export default useGameReducer;
