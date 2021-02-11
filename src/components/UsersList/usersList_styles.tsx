import { makeStyles } from '@material-ui/core/styles';

export const usersList = makeStyles((theme) => ({
	name: {
		color: 'white',
		marginLeft: 20,
		fontSize: 16,
		overflowWrap: 'break-word',
		maxWidth: 200,
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		'&:hover': { color: theme.palette.primary.main },
	},
	root: {
		overflowY: 'scroll',
		height: 420,
		padding: 10
	},
	userWrapper: {
		'&:hover': {
			background: 'linear-gradient(to right, #8e9eab, #eef2f0)',
			borderRadius: 15,
			color: theme.palette.primary.main
		},
		padding: 4,
	},
	friendBtn: {
		width: 90,
		margin: 5,
	},
	notfound: {
		color: 'white',
		textAlign: 'center',
		fontSize: 50,
	},
	avatar: {
		width: 50,
		height: 50
	}
}))
