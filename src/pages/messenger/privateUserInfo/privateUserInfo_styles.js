import { makeStyles } from '@material-ui/core';
export const privateUserInfo = makeStyles((theme) => ({
	privateUserInfo__container: {
		padding: '15px 0px',
		background: '#2f3136',
		borderRadius: '0 15px 15px 0px',
		height: 600,
		color: '#8e9297',
		position: 'relative',
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