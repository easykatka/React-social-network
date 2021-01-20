import { makeStyles } from '@material-ui/core/styles';
export const loginStyles = makeStyles((theme) => ({
	login__formContainer: {
		padding: theme.spacing(5),
		flexDirection: 'column',
		textAlign: 'center',
		margin: '0 auto',
		width: 400,
		color: 'white',
		'&>*': { paddingBottom: theme.spacing(1) },
	},
	login__icon: {
		fontSize: 130,
		width: '100%',
		color: '#61dafb',
	},
	login__captcha: { margin: '0 auto', width: '100px' },
	login__error: {
		color: 'red',
	},
	login__container: {
		height: 600,
		width: 400,
		margin: '0 auto',
		background: '#2f3136',
		borderRadius: '15px',
		color: 'white',
	},
}));