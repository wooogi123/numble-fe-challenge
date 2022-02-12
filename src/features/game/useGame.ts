import * as React from 'react';
import useGameReducer from './useGameReducer';
import { useRequestAnimationFrame } from '../../hooks';

const useGame = () => {
  const [state, dispatch] = useGameReducer();

  const elapsedTime = React.useRef<number>(0);

  useRequestAnimationFrame((deltaTime) => {
    if (!state.isStarted) return;
    if (state.isGameOver) return;
    if (state.isClear) return;

    elapsedTime.current += deltaTime;

    if (elapsedTime.current >= 100) {
      dispatch({ type: 'tick', payload: elapsedTime.current });
      elapsedTime.current = 0;
    }
  }, [state]);

  return { state, dispatch };
};

export default useGame;
