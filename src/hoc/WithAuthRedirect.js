import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthUserData} from "../redux/Auth-reducer";

let mapStateToPropsForRedirect = (state) => ({
	isAuth : state.auth.isAuth
})
export const withAuthRedirect = (Component) => {
		class RedComp extends React.Component {
		render() {
			// alert(this.props.isAuth)
			if (!this.props.isAuth) return <Redirect to={"/login"}/>            // первая RedComp
			return <Component {...this.props} />
		}
	}
	let	ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedComp)  //конект оборачивает RedComp другой компонентой
	return ConnectedAuthRedirectComponent                                           // и передает ей из стейста ис аус
}
