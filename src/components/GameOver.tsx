import * as React from 'react';
import { styled } from '../stitches.config';

const GameOver: React.FC = () =>
  <Typography>game over</Typography>;

export default GameOver;

const Typography = styled('span', {
  fontFamily: '$default',
  fontSize: 32,
  fontWeight: '$2',
  lineHeight: 1.4,
  color: '$veryPeri',
  textTransform: 'uppercase',
});
