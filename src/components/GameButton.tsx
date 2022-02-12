import * as React from 'react';
import { styled } from '../stitches.config';

interface GameButtonProps {
  onClick: () => void;
}

const GameButton: React.FC<GameButtonProps> = ({
  onClick,
  children,
}) => (
  <Button onClick={onClick}>
    <StartTypo>{children}</StartTypo>
  </Button>
);

export default GameButton;

const Button = styled('button', {
  padding: 16,
  background: 'rgba(235, 235, 235, 0.08)',
  borderRadius: 16,
  boxShadow: '0 4px 24px rgba(51, 51, 51, 0.36)',
  backdropFilter: 'blur(4px)',
  border: '1px solid rgba(235, 235, 235, 0.08)',
  cursor: 'pointer',
});

const StartTypo = styled('span', {
  fontFamily: '$default',
  fontSize: 32,
  fontWeight: '$2',
  lineHeight: 1.4,
  color: '$veryPeri',
  textTransform: 'uppercase',
});
