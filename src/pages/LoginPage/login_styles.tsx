import { makeStyles } from '@material-ui/core/styles';
export const loginStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(5),
		flexDirection: 'column',
		textAlign: 'center',
		margin: '0 auto',
		background: '#2f3136',
		height: '100%',
		width: 500,
		color: 'white',
		borderRadius: 20,
		'&>*': { paddingBottom: theme.spacing(1) },
	},
	icon: {
		fontSize: 90,
		width: '100%',
		color: '#61dafb',
	},
	captcha:
	{
		margin: '0 auto',
		width: '100px'
	},
	error: {
		color: 'red',
	}
}))
