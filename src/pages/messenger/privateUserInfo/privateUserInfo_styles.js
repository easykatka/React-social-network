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
			color: 'white',
		},
	},
	privateUserInfo__avatar: {
		borderRadius: '50%',
		width: '70%',
	},

}));