import { makeStyles } from '@material-ui/core';

export const profileEditForm = makeStyles((theme) => ({
	root: {
		alignItems: 'center',
		height: 600,
		width: '100%',
		display: 'flex',
		justifyContent: 'space-around',
		flexDirection: 'column'
	},
	leftBlock: {
		display: 'flex',
		flexDirection: 'column',
		color: 'white',
		textAlign: 'center',
		justifyContent: 'space-around',
		"&>*": { margin: 30 },
		marginLeft:100

	},
	rightBlock: {
		display: 'flex',
		flexDirection: 'column',
		color: 'white',
		textAlign: 'center',
		justifyContent: 'space-around',
		"&>*": { margin: 27 },
		marginRight:100
	},
	job: {

		color: 'white',
	},
	error: {
		color: 'red'
	},
	buttons: {
		margin: 20,
	}
}));