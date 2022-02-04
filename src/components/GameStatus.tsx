import * as React from 'react'
import { styled } from '../stitches.config';
import FormattedItemTypo from './FormattedItemTypo';

interface GameStatusProps {
	stage: number;
	score: number;
	time: number;
}

const GameStatus: React.FC<GameStatusProps> = ({
	stage,
	score,
	time,
}) => {
	const formattedTime = (time / 1000).toFixed(1);
	const padStage = (stage / 10 >= 1) ? stage : `0${stage}`;

	return (
		<>
		  <StageTypo>{padStage}</StageTypo>
			<div>
				<FormattedItemTypo
				  prefix={'score'}
					seperator={':'}
					suffix={score}
					seperatorLeftMargin={'regular'}
				/>
				<FormattedItemTypo
				  prefix={'time'}
					seperator={':'}
					suffix={formattedTime}
					seperatorLeftMargin={'large'}
				/>
			</div>
		</>
	);
};

export default GameStatus;

const StageTypo = styled('span', {
	fontFamily: '$default',
	fontSize: 32,
	fontWeight: '$2',
	lineHeight: 1.4,
	color: '$veryPeri',
	textTransform: 'uppercase',
});
