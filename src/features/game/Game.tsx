import * as React from 'react';
import {
  GameHeader,
  GamePlate,
  GameStart,
} from '../../components';
import Board from './Board';
import useGame from './useGame';

const Game: React.FC = () => {
  const { state, dispatch } = useGame();

  const isStarted = React.useMemo(() => state.isStarted, [state]);
  const isClear = React.useMemo(() => state.isClear, [state]);

  const handleClickStart = React.useCallback(() => {
    dispatch({ type: 'init' });
  }, [dispatch]);

  const handleClickAnswer = React.useCallback(() => {
    dispatch({ type: 'nextStage' });
  }, [dispatch]);

  const handleClickWrongAnswer = React.useCallback(() => {
    dispatch({ type: 'deduct' });
  }, [dispatch]);

  if (!isStarted) {
    return (
      <GamePlate>
        <GameStart onClick={handleClickStart} />
      </GamePlate>
    );
  }

  if (isClear) {
    return (
      <GamePlate>
        <GameHeader
          stage={state.stage}
          time={state.remainingTime}
          score={state.score}
        />
      </GamePlate>
    );
  }

  return (
    <GamePlate>
      <GameHeader
        stage={state.stage}
        time={state.remainingTime}
        score={state.score}
      />
      <Board
        stage={state.stage}
        onClickAnswer={handleClickAnswer}
        onClickWrongAnswer={handleClickWrongAnswer}
      />
    </GamePlate>
  );
};

export default Game;
