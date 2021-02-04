
import { makeStyles } from '@material-ui/core';

export const profileInfoStyles = makeStyles((theme) => ({
	root: {
		height: 600,
		maxWidth: 300,
		padding: 2,
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'column',
		color: 'grey', 
		textAlign: 'center'
	},
	descriptionLabel:{
		color:theme.palette.secondary.main,
		fontSize:16,
		fontWeight:700
	}
}))
