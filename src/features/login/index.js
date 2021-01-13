
import { useFormik } from 'formik'
import { makeStyles } from "@material-ui/core/styles";
import { putLogin } from "../../app/reducers/auth-reducer";
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, Checkbox, Grid, FormControlLabel, Typography, Paper } from '@material-ui/core/'
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
	
const useStyles = makeStyles(theme => ({
	login__container: {
		margin: "0 auto",
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'left',
		textAlign:'center',
		"&>*": { paddingBottom: theme.spacing(2) }
	},
}))

export const Login = () => {
	const captchaUrl = useSelector(state => state.auth.captchaUrl)
	const errorMessage = useSelector(state => state.auth.errorMessage)
	const dispatch = useDispatch()
	const classes = useStyles();
	const { handleSubmit, handleChange, values } = useFormik({
		initialValues: {
			login: "",
			password: "",
			captcha: "",
			rememberMe: false
		},
		onSubmit: ({ login, password, captcha, rememberMe }) => {
			console.log(login, password, captcha, rememberMe)
			dispatch(putLogin(login, password, rememberMe, captcha))
		}
	})

	//TODO сделать валидацию
	return (
		<Paper>
			<form onSubmit={handleSubmit} >
				<Grid container spacing={4} >
					<Grid item className={classes.login__container}>
						<Typography variant='h5'>LOGIN </Typography>
						<Typography style={{ color: 'red' }}>{errorMessage} </Typography>
						<TextField label='Login' type="text" onChange={handleChange} id="login" name="login" value={values.login} required />
						<TextField  label='Password' type="password" onChange={handleChange} id="password" name="password" value={values.password} required />
						<FormControlLabel  control={
							<Checkbox checked={values.rememberMe} onChange={handleChange} name="rememberMe" color="primary" />} label="Remember me" />
						{captchaUrl && <img src={captchaUrl} alt='captcha' />}
						{captchaUrl && (<div><TextField label='Capcha' type="text" onChange={handleChange} id="captcha" name="captcha" value={values.captcha} />
						</div>)}
						<Button variant='contained' startIcon={<VpnKeyRoundedIcon />} size='large' type='submit' color="primary" > Log In</Button>
						<p>Для тестового просмотра используйте пару логин/пароль: </p>
							<p>free@socialnet.com / free</p>
					</Grid>
				</Grid>
			</form>
		</Paper>
	)


}
