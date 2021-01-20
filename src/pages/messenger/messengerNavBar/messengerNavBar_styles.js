import { makeStyles } from '@material-ui/core';
export const messengerNavBar = makeStyles((theme) => ({
	chatNavBar__container: {
		padding: '15px',
		background: '#2f3136',
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: '15px 0px 0px 15px',
		height: 600,
	},
	chatNavBar__avatar: {
		margin: 11,
		paddingLeft: 5,
		'&:hover': {},
	},
	chatNavBar__pmContainer: {
		overflowY: 'auto',
	},
}));