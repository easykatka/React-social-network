import { makeStyles } from '@material-ui/core';
export const profileMain = makeStyles((theme) => ({
	profileMain__container: {

		background: '#2f3136',
		color: 'white',
		borderRadius: '15px 0px 0px 15px',
		height: 600,
		alignItems: 'center',
		padding:10
	},
	profileMain__avatar: {
		width: 150,
		height: 150,
	},
	profileMain__status: {
		textAlign: 'center',
		cursor: 'pointer',
		fontSize: 20,
		"&:hover": { color: "orange" },
		color: '#61fbfb',
		wordBreak: 'break-all',
	},
	profileMain__editIcon: {
		marginLeft: 10,
		fontSize: 18
	},
	profileMain__name: {
		fontWeight: 700,
		fontSize: 20,
		textAlign: 'center',
		wordBreak: 'break-all',
	},
	profileMain__friends: {
		fontSize: 20,
		fontWeight: 500,
	},
}));

