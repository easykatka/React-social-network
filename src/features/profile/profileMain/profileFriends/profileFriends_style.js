import { makeStyles } from '@material-ui/core';
export const profileFreinds = makeStyles((theme) => ({
	profileFreinds__friendsContainer: {
		margin: '20px 0',
		alignItems: 'flex-start'
	},
	profileFreinds__friendName: {
		textAlign:'center',
		wordBreak:'break-word'
	},
	profileFreinds__friendAvatar: {
		width: 60,
		height: 60,
		marginBottom: 4
	},
	profileFreinds__friendItem: {
		color: 'grey',
		padding:10,
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



