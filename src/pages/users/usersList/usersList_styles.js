import { makeStyles } from '@material-ui/core/styles';

export const usersList = makeStyles((theme) => ({
	usersList__name: {
		color: 'black',
		fontSize: 15,
		textAlign: 'center',
	},
	usersList__cards: {
		overflowY: 'scroll',
		width: '100%',
		height: 430,
		paddingLeft: 30,
	},
	usersList__card: {
		height: 150,
		backgroundColor:'grey',

		'&>:hover': {
			background: 'linear-gradient(to right, #8e9eab, #eef2f3)',
		},
	},
	usersList__cardmedia: {
		height: 90,
	},
	usersList_notfound:{
		color: 'white',
		 textAlign: 'center', 
		 fontSize: 50, 
		 margin: '0 auto' 
	}
}))
