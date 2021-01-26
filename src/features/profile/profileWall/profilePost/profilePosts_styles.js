import { makeStyles } from '@material-ui/core';
export const profilePosts = makeStyles((theme) => ({
	profilePosts__container: {
		overflowY: 'auto',
		height: 450,
		width: '100%',
	},
	profilePosts__content: {
		paddingRight: 30,
		color: 'grey',
		display: 'flex',
		flexDirection: 'column-reverse',
		justifyContent: 'flex-end',
		overflowY: 'auto',
		width: '100%',
	},
	profilePosts__item: {
		width: '100%',
		display: 'flex',
		backgroundColor: '#202225',
		padding: 10,
		marginTop: 20,
	
	},
	profilePosts__date:{
		color:'orange',
		fontSize:10
	},
	profilePosts__body:{
		width:'100%',
	},
	profilePosts__avatar:{
		marginRight:20
	}
}));