import { makeStyles } from '@material-ui/core';
export const profileMain = makeStyles((theme) => ({
	
	root: {
		background: '#2f3136',
		color: 'white',
		borderRadius: '0 0 0 15px',
		height: 600,
		alignItems: 'center',
		padding: 15
	},

	fullName: {
		fontWeight: 700,
		fontSize: 20,
		textAlign: 'center',
		wordBreak: 'break-all',
	},
	friends: {
		borderTop: '1px solid grey',
		paddingTop: 5,
		width: '100%'
	},
	friendButton: {
		margin: 20,
		width: 200

	},
	pmButton: {
		margin: 20,
		color: 'black',
		
		width: 200
	}

}))
