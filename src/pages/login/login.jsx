import { useFormik } from 'formik';
import { sendLogin } from '../../app/reducers/auth-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Checkbox, Grid, FormControlLabel, Typography } from '@material-ui/core/';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import * as Yup from 'yup';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { loginStyles } from './login_styles';

export const Login = () => {
	const { captchaUrl, errorMessage } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const classes = loginStyles();
	const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
		initialValues: {
			login: '',
			password: '',
			captcha: '',
			rememberMe: false,
		},
		validationSchema: Yup.object({
			login: Yup.string().email('Insert correct email ').required('Required'),
			password: Yup.string()
				.min(4, 'Password must be longer than 4 characters.')
				.max(12, 'Password must be shorter than 12 characters.')
				.required('Required'),
		}),
		onSubmit: ({ login, password, captcha, rememberMe }) => {
			dispatch(sendLogin(login, password, rememberMe, captcha));
		},
	});
	return (
		<Grid container component='form' onSubmit={handleSubmit} className={classes.login__formContainer}>
			<ExitToAppIcon className={classes.login__icon} />
			<Typography variant='h6' className={classes.login__error}>
				{errorMessage}
			</Typography>
			<TextField label='Email' onBlur={handleBlur} size='small' onChange={handleChange} id='login' name='login' value={values.login} />
			{errors.login && touched.login && <div className={classes.login__error}>{errors.login}</div>}
			<TextField
				label='Password'
				onBlur={handleBlur}
				size='small'
				type='password'
				onChange={handleChange}
				id='password'
				name='password'
				value={values.password}
			/>
			{errors.password && touched.password && <div className={classes.login__error}>{errors.password}</div>}
			<FormControlLabel
				control={<Checkbox checked={values.rememberMe} onChange={handleChange} name='rememberMe' color='primary' />}
				label='Remember me'
			/>
			{captchaUrl && (
				<>
					<img className={classes.login__captcha} src={captchaUrl} width='100px' alt='captcha' />
					<TextField
						label='Captcha'
						onBlur={handleBlur}
						onChange={handleChange}
						id='captcha'
						size='small'
						name='captcha'
						value={values.captcha}
					/>
				</>
			)}
			<Button variant='contained' startIcon={<VpnKeyRoundedIcon />} size='large' type='submit' color='primary'>
				Log In
			</Button>
			<p>Для тестового просмотра используйте пару логин/пароль: </p>
			<p>free@socialnet.com / free</p>
		</Grid>
	);
};
