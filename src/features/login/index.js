
import {useFormik} from 'formik'
import { makeStyles } from "@material-ui/core/styles";
import {loginThunk} from "../../app/reducers/auth-reducer";
import { useDispatch, useSelector } from 'react-redux';
import {TextField,Button , Checkbox , Grid ,FormControlLabel, Typography, Paper } from '@material-ui/core/'
;

const useStyles = makeStyles(theme => ({
	login__container: {
		margin:"0 auto",
		display:'flex',
		flexDirection:'column',
		alignItems:'center',
		"&>*" :{paddingBottom:theme.spacing(2)}
	},
	content__container :{
		width:"100%",
		margin:"0 auto"
	}
}))

export const Login = () => {
	const captchaUrl = useSelector(state => state.auth.captchaUrl)
	const errorMessage = useSelector(state => state.auth.errorMessage)
	const dispatch = useDispatch()
	const classes = useStyles();
	const {handleSubmit , handleChange ,values} = useFormik({
		initialValues: {
			login: "",
			password: "",
			captcha:"",
			rememberMe:false
		  },
		  onSubmit: ({login , password , captcha , rememberMe}) => { 
			  console.log(login , password , captcha , rememberMe)
			dispatch(loginThunk(login,password,rememberMe,captcha))
			 }
			})

			//TODO сделать валидацию
  return ( 
	  <Paper className={classes.content__container}>
<form onSubmit={handleSubmit} >
	<Grid container >
	<Grid item xs={5}  className={classes.login__container}>
	<Typography variant='h5'>LOGIN </Typography>
	<Typography style={{color:'red'}}>{errorMessage} </Typography>
	<TextField label='Login' type="text" onChange={handleChange} id="login" name="login" value={values.login} required/>
	<TextField label='Password' type="password" onChange={handleChange} id="password" name="password" value={values.password} required />
	<FormControlLabel control={
    <Checkbox checked={values.rememberMe} onChange={handleChange} name="rememberMe" color="primary"/>} label="Remember me" />
	{captchaUrl && <img src={captchaUrl} alt='captcha'/>}
	{captchaUrl && (<div><TextField label='Capcha' type="text" onChange={handleChange} id="captcha" name="captcha" value={values.captcha} />
	</div> )}
	<Button size='large' type='submit' color="primary" > Log In</Button>
	</Grid>
	</Grid>
</form>
</Paper>
  )


}
