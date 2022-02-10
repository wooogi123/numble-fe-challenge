import * as React from 'react';
import { styled } from '../stitches.config';

interface GameBoardProps {
  columnCount: number;
  rowCount: number;
}

const GameBoard: React.FC<GameBoardProps> = ({
  columnCount,
  rowCount,
  children,
}) => (
  <Board
    css={{
      gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
      gridTemplateRows: `repeat(${rowCount}, 1fr)`,
    }}
  >
    {children}
  </Board>
);

export default GameBoard;

const Board = styled('div', {
  width: '100%',
  aspectRatio: '1/1',
  display: 'grid',
  gap: 4,
});
