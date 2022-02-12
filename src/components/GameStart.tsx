import * as React from 'react'
import { styled } from '../stitches.config';
import GameButton from './GameButton';

interface GameStartProps {
  onClick: () => void;
}

const GameStart: React.FC<GameStartProps> = ({
  onClick,
}) => (
  <Container>
    <GameButton onClick={onClick}>game start</GameButton>
  </Container>
);

export default GameStart;

const Container = styled('div', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
