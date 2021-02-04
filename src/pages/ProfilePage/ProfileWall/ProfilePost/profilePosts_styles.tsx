import { makeStyles } from '@material-ui/core';
export const profilePosts = makeStyles((theme) => ({
	root: {
		overflowY: 'auto',
		height: 450,
		width: '100%',

	},
	container: {
		paddingRight: 30,
		color: 'grey',
		display: 'flex',
		flexDirection: 'column-reverse',
		justifyContent: 'flex-end',
		overflowY: 'auto',
		width: '100%',
		wordBreak: 'break-word'

	},
	postWrapper: {
		width: '100%',
		display: 'flex',
		backgroundColor: '#202225',
		padding: 10,
		marginTop: 20,
		borderRadius: 5

	},
	date: {
		color: 'white',
		fontSize: 9
	},
	body: {
		width: '100%',
		paddingTop: 40
	},
	avatar: {
		marginRight: 20
	},
	fullName: {
		marginRight: 10,
		color: 'orange'
	}
}));