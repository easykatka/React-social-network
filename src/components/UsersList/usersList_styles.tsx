import { makeStyles } from '@material-ui/core/styles';

export const usersList = makeStyles(() => ({
	name: {
		color: 'black',
		fontSize: 15,
		textAlign: 'center',
	},
	root: {
		overflowY: 'scroll',
		width: '100%',
		height: 430,
		paddingLeft: 30,
	},
	card: {
		height: 150,
		backgroundColor:'grey',

		'&>:hover': {
			background: 'linear-gradient(to right, #8e9eab, #eef2f3)',
		},
	},
	cardmedia: {
		height: 90,
	},
	notfound:{
		color: 'white',
		 textAlign: 'center', 
		 fontSize: 50, 
		 margin: '0 auto' 
	}
}))
