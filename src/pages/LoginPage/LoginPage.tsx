import { useFormik } from 'formik';
import { sendLogin } from '../../app/reducers/auth-reducer';
import { useSelector } from 'react-redux';
import { TextField, Button, Checkbox, Grid, FormControlLabel, Typography } from '@material-ui/core/';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
import * as Yup from 'yup';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { loginStyles } from './login_styles';
import { RootState } from '../../app/store';
import { loginUserData } from '../../common/types/types';
import { useAppDispatch } from '../../app/store';


export const LoginPage: React.FC = () => {
	const { captchaUrl, errorMessage } = useSelector((state: RootState) => state.auth);
	const dispatch = useAppDispatch();
	const classes = loginStyles();
	const loginDefault:loginUserData = {
		email: 'secondjump@bk.ru',
		password: 'qwaszx',
		rememberMe: true
	}
	const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
		initialValues: {
			email: '',
			password: '',
			rememberMe: false,
			captcha: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Insert correct email ').required('Required'),
			password: Yup.string()
				.min(4, 'Password must be longer than 4 characters.')
				.max(12, 'Password must be shorter than 12 characters.')
				.required('Required'),
		}),
		onSubmit: (loginData: loginUserData) => {
			if (loginData.email === 'free@samuraijs.com') 
			dispatch(sendLogin(loginDefault))
			else {
				dispatch(sendLogin(loginData))
			}
		},
	});

	return (
		<Grid container component='form' onSubmit={handleSubmit} className={classes.root}>
			<ExitToAppIcon className={classes.icon} />
			<Typography variant='h6' className={classes.error}>
				{errorMessage}
			</Typography>
			<TextField label='Email' onBlur={handleBlur} size='small' onChange={handleChange} id='email' name='email' value={values.email} />
			{errors.email && touched.email && <div className={classes.error}>{errors.email}</div>}
			<TextField
				label='Password'
				onBlur={handleBlur}
				size='small'
				type='password'
				onChange={handleChange}
				variant='standard'
				id='password'
				name='password'
				value={values.password}
			/>
			{errors.password && touched.password && <div className={classes.error}>{errors.password}</div>}
			<FormControlLabel
				control={<Checkbox checked={values.rememberMe} onChange={handleChange} name='rememberMe' color='primary' />}
				label='Remember me'
			/>
			{captchaUrl && (
				<>
					<img className={classes.captcha} src={captchaUrl} width='100px' alt='captcha' />
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
			<p> free@samuraijs.com / free</p>
		</Grid>
	);
};
