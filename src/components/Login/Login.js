import React from 'react'
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {FormControl} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/Auth-reducer";
import {Redirect} from "react-router-dom";
import style from './../common/FormsControls/FormsControls.module.css'


// Login форма
const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <div>{error && <div className={style.formSummaryError}>{error}
						</div>}
                <Field typeF="input" placeholder={"Login"} name={"email"} component={FormControl} validate={[required]}/>
                <Field typeF="input" placeholder={"Password"} type={"password"} name={"password"} component={FormControl}
                       validate={[required]}/>
                <Field typeF="input" component={FormControl} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>

            {captchaUrl && <img src={captchaUrl}/>}
            <div>
                {captchaUrl &&
								<Field typeF="input" placeholder={""} name={"captcha"} component={FormControl} validate={[required]}/>}
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    </div>
}
// ХОК для логин формы
const ReduxLoginForm = reduxForm({form: "login"})(LoginForm)   //обертка редакс форм

// Форма Login
const Login = (props) => {                        //логика при сабмите
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <ReduxLoginForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => (
    {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    })
export default connect(mapStateToProps, {login})(Login)