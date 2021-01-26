import { makeStyles } from '@material-ui/core';
export const profileFreinds = makeStyles((theme) => ({
	profileFreinds__friendsContainer: {
		margin: '15px 0',
		alignItems: 'flex-start'
	},
	profileFreinds__friendName: {
		textAlign: 'center',
		wordBreak: 'break-word'
	},
	profileFreinds__friendAvatar: {
		width: 50,
		height: 50,
	},
	profileFreinds__friendItem: {
		color: 'grey',
		padding: 10,
		'&:hover': {
			color: '#61fbfb'
		},
	},
	profileFreinds__friendsLabel: {
		color: 'grey',
		textAlign: 'center',
		fontSize: 13,
		fontWeight: 700,
	},
}));



