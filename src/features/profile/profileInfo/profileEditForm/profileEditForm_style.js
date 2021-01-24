import { makeStyles } from '@material-ui/core';
import { FormatAlignJustify } from '@material-ui/icons';

export const profileEditForm = makeStyles((theme) => ({
	profileEditForm__container: {
		alignItems: 'center',
		padding: 50,
		height: 600,
		width: '100%',
		display:'flex',
		justifyContent:'space-around',
	},
	profileEditForm__leftBlock:{
		display:'flex',
		flexDirection:'column',
		color:'white',
		textAlign:'center',
		justifyContent:'space-around',
		"&>*":{margin:30}
		
	},
	profileEditForm__rightBlock:{
		display:'flex',
		flexDirection:'column',
		color:'white',
		textAlign:'center',
		justifyContent:'space-around'
	},
	profileEditForm__contacts:{
		margin:30
	},
	profileEditForm__job:{
		paddingRight:15
	},
	profileEditForm__error:{
		color:'red'
	}
}));