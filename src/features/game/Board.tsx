import * as React from 'react'
import { GameBoard } from '../../components';
import {
  getItemCount,
  getRandomNumber,
  createGameColors,
} from './utils';
import { LAST_STAGE } from './constants';

interface ClickableItem {
  key: string;
  background: string;
  isAnswer: boolean;
}

const generateItems = (stage: number): ClickableItem[] => {
  const colorGap = (LAST_STAGE - stage + 1) * 4;
  const { base, answer } = createGameColors(colorGap);

  const count = getItemCount(stage);

  const answerIdx = getRandomNumber(count);

  return Array(count)
    .fill(undefined)
    .map((_, idx) => ({
      key: `${count}-${idx}`,
      background: answerIdx === idx
        ? answer.toString()
        : base.toString(),
      isAnswer: answerIdx === idx,
    }));
};

interface BoardProps {
  stage: number;
  onClickAnswer: () => void;
  onClickWrongAnswer: () => void;
}

const Board: React.FC<BoardProps> = ({
  stage,
  onClickAnswer,
  onClickWrongAnswer,
}) => {
  const itemCount = getItemCount(stage);
  const gridItemCount = Math.floor(Math.sqrt(itemCount));

  return (
    <GameBoard
      columnCount={gridItemCount}
      rowCount={gridItemCount}
    >
      {generateItems(stage).map(({
        key,
        background,
        isAnswer,
      }) => (
        <div
          key={key}
          style={{ background }}
          onClick={isAnswer
            ? onClickAnswer
            : onClickWrongAnswer}
        />
      ))}
    </GameBoard>
  );
};

export default React.memo(Board);
