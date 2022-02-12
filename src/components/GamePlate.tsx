import * as React from 'react';
import { styled } from '../stitches.config';

const GamePlate: React.FC = ({ children }) =>
  <Plate>{children}</Plate>;

export default GamePlate;

const Plate = styled('div', {
  padding: 16,
  background: 'rgba(235, 235, 235, 0.64)',
  borderRadius: 16,
  boxShadow: '0 4px 24px rgba(51, 51, 51, 0.36)',
  backdropFilter: 'blur(4px)',
  border: '1px solid rgba(235, 235, 235, 0.64)',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 320,
  height: 420,
});
