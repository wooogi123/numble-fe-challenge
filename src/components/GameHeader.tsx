import * as React from 'react';
import { styled } from '../stitches.config';
import GameOver from './GameOver';
import GameStatus from './GameStatus';

interface GameHeaderProps {
	isGameOver: boolean;
	stage: number;
	time: number;
	score: number;
}

const GameHeader: React.FC<GameHeaderProps> = ({
	isGameOver,
	stage,
	time,
	score,
}) => {
	return (
		<Header justify={isGameOver ? 'center' : 'space-between'}>
			{isGameOver ? (
				<GameOver />
			) : (
				<GameStatus
					stage={stage}
					score={score}
					time={time}
				/>
			)}
		</Header>
	);
};

export default GameHeader;

const Header = styled('div', {
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	minHeight: 44.8,
	variants: {
		justify: {
			'center': {
				justifyContent: 'center',
			},
			'space-between': {
				justifyContent: 'space-between',
			},
		},
	},
});
