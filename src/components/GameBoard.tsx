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
  <Container>
    <Board
      css={{
        gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
        gridTemplateRows: `repeat(${rowCount}, 1fr)`,
      }}
    >
      {children}
    </Board>
  </Container>
);

export default GameBoard;

const Container = styled('div', {
  width: '100%',
  aspectRatio: '1/1',
  paddingTop: '100%',
  position: 'relative',
});

const Board = styled('div', {
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  display: 'grid',
  gap: 4,
});
