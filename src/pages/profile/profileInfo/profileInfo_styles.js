
import { makeStyles } from '@material-ui/core';

export const profileInfoStyles = makeStyles((theme) => ({
	profileInfo__container: {
		height: 600,
		maxWidth: 300,
		padding: 2,
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'column',
		color: 'grey', 
		textAlign: 'center'
	},
	profileInfo__label:{
		color:'orange',
		fontSize:16,
		fontWeight:700
	}
}))
