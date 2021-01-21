import { makeStyles } from '@material-ui/core';
export const profileFreinds = makeStyles((theme) => ({
	profileFreinds__friendsContainer: {
		margin: '20px 0',
		alignItems: 'flex-start'
	},
	profileFreinds__friendName: {
		wordBreak: 'break-all'
	},
	profileFreinds__friendAvatar: {
		width: 60,
		height: 60,
		marginBottom: 5
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
		fontSize: 16,
		fontWeight: 700,
	},
}));



