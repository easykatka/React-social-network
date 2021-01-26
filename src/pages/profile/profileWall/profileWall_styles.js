import { makeStyles } from '@material-ui/core';
export const profileWall = makeStyles((theme) => ({

	profileWall__container: {
		backgroundColor: '#2f3136',
		height: 600,
		padding: 30
	},
	profileWall__content: {
		backgroundColor: '#202225',
		marginBottom: 20,
		color: 'white',
		padding: 10,
		width: '95%',
		borderRadius: 8
	},
	profileWall__input: {
		width: '90%',
		marginLeft: 20
	},
	profileWall__inputWrapper:{
		marginLeft: 20
	}
}))