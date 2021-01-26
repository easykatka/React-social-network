import { makeStyles } from '@material-ui/core';

export const profileEditForm = makeStyles((theme) => ({
	profileEditForm__container: {
		alignItems: 'center',
		height: 600,
		width: '100%',
		display:'flex',
		justifyContent:'space-around',
		flexDirection:'column'
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

		color:'white',
	},
	profileEditForm__error:{
		color:'red'
	},
	profileEditForm__buttons:{
		margin:20,
	}
}));