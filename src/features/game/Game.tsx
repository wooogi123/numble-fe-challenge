import * as React from 'react';
// import { styled } from '../../stitches.config';
import {
  GameBoard,
  GameHeader,
  GamePlate,
  GameStart,
} from '../../components';
import useGame from './useGame';
import useRequestAnimationFrame from './useRequestAnimationFrame';

const Game: React.FC = () => {
  const [state, dispatch] = useGame();

  const isStarted = React.useMemo(() => state.isStarted, [state]);
  const isGameOver = React.useMemo(() => state.isGameOver, [state]);
  const stage = React.useMemo(() => state.stage, [state]);

  const handleClickStart = React.useCallback(() => {
    dispatch({ type: 'init' });
  }, [dispatch]);

  const elapsedTime = React.useRef<number>(0);

  const runTick = React.useCallback(() => {
    dispatch({ type: 'tick' });
  }, [dispatch]);

  useRequestAnimationFrame((deltaTime) => {
    if (!isStarted) return;
    if (isGameOver) return;

    elapsedTime.current += deltaTime;

    if (elapsedTime.current >= 100) {
      elapsedTime.current = 0;
      runTick();
    }
  }, [isStarted, isGameOver]);

  if (!isStarted) {
    return (
      <GamePlate>
        <GameStart onClick={handleClickStart} />
      </GamePlate>
    );
  }

  return (
    <GamePlate>
      <GameHeader
        isGameOver={isGameOver}
        stage={stage}
        time={state.remainingTime}
        score={state.score}
      />
      <GameBoard stage={stage} />
    </GamePlate>
  );
};

export default Game;
