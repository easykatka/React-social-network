
import {useFormik} from 'formik'
import { makeStyles } from "@material-ui/core/styles";
import {loginThunk} from "../../app/reducers/auth-reducer";
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({

	app__container: {
	  width: 1200,
	  margin: "0 auto",
	  maxWidth:"100%"
	}}))

export const Login = () => {
	const captchaUrl = useSelector(state => state.auth.captchaUrl)
	const dispatch = useDispatch()
	const classes = useStyles();
	const {handleSubmit , handleChange ,values} = useFormik({
		initialValues: {
			login: "",
			password: "",
			captcha:null,
			rememberMe:false
		  },
		  onSubmit: ({login , password , captcha , rememberMe}) => { 
			dispatch(loginThunk(login,password,rememberMe,captcha))
			 }
			})
		  

  return ( 
<form onSubmit={handleSubmit} className={classes.app__container}>
	<div>Login image</div>
	<label htmlFor="login">Login</label>
	<input type="text" onChange={handleChange} id="login" name="login" value={values.login} />
	<br/>
	<label htmlFor='password'>Password</label>
	<input type="password" onChange={handleChange} id="password" name="password" value={values.password} />
	<br/>
	<label htmlFor='rememberMe'>Remember me?</label>
	<input type="checkbox" onChange={handleChange} id="rememberMe" name="rememberMe" value={values.rememberMe} />
	<br/>
	{captchaUrl && <img src={captchaUrl} alt='captcha'/>}
	
		{captchaUrl && (<div>
	<label htmlFor='captcha'>Captcha</label> 
	<input type="text" onChange={handleChange} placeholder="" id="captcha" name="captcha" value={values.captcha} />
	</div> )}
	<button type='submit'> Log In</button>
</form>
  )


}
