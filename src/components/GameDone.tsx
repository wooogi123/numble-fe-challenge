import * as React from 'react';
import { styled } from '../stitches.config';
import GameButton from './GameButton';

interface GameDoneProps {
  onClickRestart: () => void;
  title: string;
}

const GameDone: React.FC<GameDoneProps> = ({
  onClickRestart,
  title,
}) => (
  <Container>
    <Typography>{title}</Typography>
    <GameButton onClick={onClickRestart}>restart?</GameButton>
  </Container>
);

export default GameDone;

const Container = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const Typography = styled('span', {
  fontFamily: '$default',
  fontSize: 42,
  fontWeight: '$2',
  lineHeight: 1.4,
  color: '$veryPeri',
  textTransform: 'uppercase',
  marginBottom: 42,
});
