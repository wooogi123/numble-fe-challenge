import * as React from 'react';
import { styled } from '../stitches.config';

const getCount = (base: number) => Math.pow(Math.round((base + 0.5) / 2) + 1, 2);

const getTolerance = (t: number) => Math.sign(Math.random() - 0.5) * t;

const getRandomItem = (len: number) => Math.floor(Math.random() * (len - 1));

const getColor = () => Math.floor(Math.random() * 255);

const generateColors = (stage: number): {
  base: string;
  answer: string;
} => {
  const  r = getColor();
  const g = getColor();
  const b = getColor();

  return {
    base: `rgb(${r}, ${g}, ${b})`,
    answer: `rgb(${r + getTolerance(stage)}, ${g + getTolerance(stage)}, ${b + getTolerance(stage)})`
  }
};

const geenrateItems = (stage: number): {
  key: string;
  background: string;
}[] => {
  const { base, answer } = generateColors(stage);

  const count = getCount(stage);

  const answerIdx = getRandomItem(count);

  console.log(answerIdx, count);

  return Array(count)
    .fill(undefined)
    .map((_, idx) => ({
      key: `${idx}`,
      background: answerIdx === idx ? answer : base,
    }));
};

interface GameBoardProps {
  stage: number;
}

const GameBoard: React.FC<GameBoardProps> = ({
  stage,
}) => {
  return (
    <Board style={{ '--count': Math.floor(Math.sqrt(getCount(stage))) } as React.CSSProperties}>
      {geenrateItems(stage).map(({ key, background }) => (
        <div
          style={{ background }}
          key={key}
        />
      ))}
    </Board>
  );
};

export default React.memo(GameBoard);

const Board = styled('div', {
  width: '100%',
  aspectRatio: '1/1',
  display: 'grid',
  gridTemplate: 'repeat(var(--count), 1fr) / repeat(var(--count), 1fr)',
  gap: 8,
});
