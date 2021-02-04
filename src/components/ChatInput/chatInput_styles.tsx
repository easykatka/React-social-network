import { makeStyles } from "@material-ui/core";
export const chatForm = makeStyles((theme) => ({
	root: {
		backgroundColor: '#40444b',
		alignItems: 'center',
		marginTop: 20,
		borderRadius: 7,
		width: '100%'
	},
	input: {
		color: 'white',
		marginLeft: 15,
		width: '100%',
		padding: 8,
		paddingRight: 40
	},
}))