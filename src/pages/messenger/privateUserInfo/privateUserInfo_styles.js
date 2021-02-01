import { makeStyles } from '@material-ui/core';
export const privateUserInfo = makeStyles((theme) => ({
	privateUserInfo__container: {
	
		background: '#2f3136',
		borderRadius: '0 0 15px 0',
		height: '100%',
		color: '#8e9297',
		position: 'relative',
		height: 600,
		'&:hover': {
			color: 'orange',
		},
		padding:30
	},
	privateUserInfo__avatar: {
		borderRadius: '50%',
		width: 250,
		height: 250,
		padding:30
	},

}));