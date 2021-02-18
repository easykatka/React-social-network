import { makeStyles } from '@material-ui/core';
export const profileStatus = makeStyles((theme) => ({
	status: {
		cursor: 'pointer',
		fontSize: 16,
		"&:hover": { color: theme.palette.secondary.main },
		color: theme.palette.primary.main,
		wordBreak: 'break-word',
		padding: 10,
	},
	icon: {
		margin:'0 5px 0 10px',
		fontSize: 20,
		cursor:'pointer',
	},
	input: {
		width: 200,
		fontSize: 20,
		marginRight:10,
		textAlign:'center'
		
	},
	root:{
		minHeight:70,
		padding:5,
	}
}))
