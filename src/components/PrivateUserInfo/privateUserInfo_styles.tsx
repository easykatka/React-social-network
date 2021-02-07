import { makeStyles } from '@material-ui/core';
export const privateUserInfo = makeStyles((theme) => ({
	root: {
		width:250,
		padding:'100px 0px',
		background: '#2f3136',
		borderRadius: '0 0 15px 0',
		color: '#8e9297',
		position: 'relative',
		height: 600,
		'&:hover': {
			color: theme.palette.primary.main,
		},
	
	},
	avatar: {
		borderRadius: '50%',
		width: 250,
		height: 250,
		padding:30
	},
}));