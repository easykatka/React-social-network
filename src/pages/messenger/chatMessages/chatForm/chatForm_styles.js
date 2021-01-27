import { makeStyles } from "@material-ui/core";


export const chatForm = makeStyles((theme) => ({
	chatForm__container: {
		backgroundColor: '#40444b',
		alignItems: 'center',
		marginTop: 20,
		borderRadius: 7,
		width:'100%'
	},
	chatForm__input: {
		color: 'white',
		marginLeft: 15,
		width: '100%',
		padding:8
	},
}))