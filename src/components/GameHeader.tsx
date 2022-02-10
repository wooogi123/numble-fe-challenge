import * as React from 'react';
import { styled } from '../stitches.config';
import GameStatus from './GameStatus';

interface GameHeaderProps {
  stage: number;
  time: number;
  score: number;
}

const GameHeader: React.FC<GameHeaderProps> = ({
  stage,
  time,
  score,
}) => {
  return (
    <Header>
      <GameStatus
        stage={stage}
        score={score}
        time={time}
      />
    </Header>
  );
};

export default GameHeader;

const Header = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: 44.8,
});
