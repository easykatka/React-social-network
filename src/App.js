import React from "react";
import { Header } from "./features/header";
import { Login } from "./features/login";
import { Users } from "./features/users";
import { useDispatch, useSelector } from "react-redux";
import { init } from "./app/reducers/app-reducer";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { Grid, } from "@material-ui/core";
import { Redirect, Switch, Route } from "react-router-dom";
import Profile from "./features/profile";
import { Chat } from "./features/chat"


const useStyles = makeStyles((theme) => ({
	app__container: {
	
		width: 1200,
		margin: "0 auto",
		paddingTop: theme.spacing(1),

	},
}));
//TODO сделать lazy load
//  const Chat = React.lazy(() => import("./features/chat"))



function App() {
	const isInit = useSelector((state) => state.app.isInit);
	const isAuth = useSelector((state) => state.auth.isAuth);
	const dispatch = useDispatch();
	useEffect(() => dispatch(init()), [dispatch]);
	const classes = useStyles();


	if (!isInit) { return <div>INITIALIZATION</div> }


	return (
		<>
			<div>

			</div>
			<Header />
			<Grid
				container
				className={classes.app__container} spacing={5} >
				<Grid item xs={12} >
					{!isAuth ? <Login /> :
						<Switch>
							<Route exact path="/" render={() => <Redirect to={"/profile"} />} />
							<Route exact path="/profile/:userId?" render={() => <Profile />} />
							<Route exact path="/users" render={() => <Users />} />
							<Route exact path="/chat" render={() => <Chat />} />
							<Route exact path="*" render={() => <div>NOT FOUND 404</div>} />
						</Switch>
					}
				</Grid>
			</Grid>
		</>
	);
}

export default App;
