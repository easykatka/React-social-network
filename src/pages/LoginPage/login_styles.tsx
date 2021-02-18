import { makeStyles } from '@material-ui/core/styles';
export const loginStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(5),
		flexDirection: 'column',
		justifyContent:'flex-end',
		textAlign: 'center',
		margin: 'auto auto',
		background: '#2f3136',
		width: 500,
		color: 'white',
		borderRadius: 20,
		'&>*': { paddingBottom: theme.spacing(1) },
	},
	icon: {
		fontSize: 90,
		width: '100%',
		color: theme.palette.primary.main,
	},
	captcha:
	{
		margin: '0 auto',
		width: '100px'
	},
	error: {
		color: 'red',
	},
	btn:{
		marginBottom:15
	},
	free:{
		fontWeight:'bold',
		color:'orange'
	}
}))
