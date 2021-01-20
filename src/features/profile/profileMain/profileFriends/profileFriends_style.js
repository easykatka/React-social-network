import { makeStyles } from '@material-ui/core';
export const profileFreinds = makeStyles((theme) => ({
	profileFreinds__friends: {
		fontSize: 20,
		fontWeight: 500,
	

	},
	profileFreinds__friendsContainer: {
		margin: '20px 0',
		alignItems: 'flex-start'
	},
	profileFreinds__friendName:{
		wordBreak: 'break-all'
	},
	profileFreinds__friendAvatar:{
		width:50,
		height:50,
		marginBottom:10
	},
	profileFreinds__friendItem:{
		margin: 10,
		
	}

}));

