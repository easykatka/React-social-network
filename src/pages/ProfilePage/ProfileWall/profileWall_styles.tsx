import { makeStyles } from '@material-ui/core';
export const profileWall = makeStyles((theme) => ({

	root: {
		backgroundColor: '#2f3136',
		height: 600,
		padding: 30,
		borderRadius: '0 0 15px 0'
	},
	wrapper: {
		backgroundColor: '#202225',
		marginBottom: 20,
		color: 'white',
		padding: 10,
		width: '95%',
		borderRadius: 8,
		wordBreak: 'break-word'
	},
	input: {
		width: '90%',
		marginLeft: 20
	},
	inputWrapper: {
		marginLeft: 20
	}
}))