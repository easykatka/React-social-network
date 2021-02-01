import { makeStyles } from '@material-ui/core';
export const profileStatus = makeStyles((theme) => ({
	profileStatus__status: {
		cursor: 'pointer',
		fontSize: 16,
		"&:hover": { color: "orange" },
		color: '#61fbfb',
		wordBreak: 'break-word',
		
	},
	profileStatus__icon: {
		margin:'0 5px 0 10px',
		fontSize: 20,
		cursor:'pointer',
	},
	profileStatus__input: {
		width: 240,
		padding: 10,
		fontSize: 16,
		padding: 5,
		marginRight:10,
		
	},
	profileStatus__container:{
		minHeight:60,
		padding:5,
	}
}))
