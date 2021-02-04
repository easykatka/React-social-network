import { makeStyles } from '@material-ui/core';
export const profileFreinds = makeStyles((theme) => ( {
	friendsWrapper: {
		margin: '15px 0',
		alignItems: 'flex-start'
	},
	name: {
		textAlign: 'center',
		wordBreak: 'break-word'
	},
	avatar: {
		width: 50,
		height: 50,
		marginBottom:10
	},
	friendItemWrapper: {
		color: 'grey',
		padding: 10,
		flexDirection: 'column',
		alignItems: 'center',
		'&:hover': {
			color: theme.palette.primary.main
		},
	},
	friendsLabel: {
		color: 'grey',
		textAlign: 'center',
		fontSize: 13,
		fontWeight: 700,
	},
}));



