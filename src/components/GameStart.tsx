import * as React from 'react'
import { styled } from '../stitches.config';

interface GameStartProps {
	onClick: () => void;
}

const GameStart: React.FC<GameStartProps> = ({
	onClick,
}) => (
	<Container>
		<Button onClick={onClick}>
			<StartTypo>game start</StartTypo>
		</Button>
	</Container>
);

export default GameStart;

const Container = styled('div', {
	position: 'absolute',
	width: '100%',
	height: '100%',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

const Button = styled('button', {
	padding: 16,
	background: 'rgba(235, 235, 235, 0.24)',
	borderRadius: 16,
	boxShadow: '0 4px 24px rgba(51, 51, 51, 0.36)',
	backdropFilter: 'blur(4px)',
	border: '1px solid rgba(235, 235, 235, 0.24)',
});

const StartTypo = styled('span', {
	fontFamily: '$default',
	fontSize: 32,
	fontWeight: '$2',
	lineHeight: 1.4,
	color: '$veryPeri',
	textTransform: 'uppercase',
});
