import { makeStyles } from "@material-ui/core";
export const chatForm = makeStyles((theme) => ({
	root: {
		backgroundColor: '#40444b',
		alignItems: 'center',
		marginTop: 10,
		borderRadius: 7,
		width: '100%'
	},
	input: {
		color: 'white',
		marginLeft: 15,
		width: '100%',
		paddingRight: 20,
		padding:4
	},
	sendIcon:{
		fontSize:13,
		color:theme.palette.primary.main
	}
}))