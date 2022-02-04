import * as React from 'react';
import { styled } from '../stitches.config';

interface FormattedItemTypoProps {
	prefix: string | number;
	seperator: string;
	suffix: string | number;
	seperatorLeftMargin: 'regular' | 'large';
}

const FormattedItemTypo: React.FC<FormattedItemTypoProps> = ({
	prefix,
	seperator,
	suffix,
	seperatorLeftMargin,
}) => (
	<Typography seperatorLeftMargin={seperatorLeftMargin}>
		<span>{suffix}</span>
		<span>{seperator}</span>
		<span>{prefix}</span>
	</Typography>
);

export default FormattedItemTypo;

const Typography = styled('span', {
	fontFamily: '$default',
	fontSize: '$2',
	fontWeight: '$2',
	lineHeight: 1.4,
	color: '$veryPeri',
	textTransform: 'uppercase',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	marginRight: 'auto',
	'& > span:nth-child(2)': {
		marginLeft: 4.8,
	},
	variants: {
		seperatorLeftMargin: {
			'regular': {
				'& > span:nth-child(2)': {
					marginRight: 4.8,
				}
			},
			'large': {
				'& > span:nth-child(2)': {
					marginRight: 14.4,
				}
			}
		}
	}
});
