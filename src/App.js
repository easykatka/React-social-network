import React from "react";
import { Header } from "./features/header";
import { Login } from "./features/login";
import { Users } from "./features/users";
import { useDispatch, useSelector } from "react-redux";
import { initThunk } from "./app/reducers/app-reducer";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { Navbar } from "./features/navbar";
import { Grid, Paper } from "@material-ui/core";
import { Redirect, Switch, Route } from "react-router-dom";
import Profile from "./features/profile";
import { Chat } from "./features/chat"
import { Messages } from "./features/messages";

const useStyles = makeStyles((theme) => ({
  app__container: {
    width: 1200,
    margin: "0 auto",
    paddingTop: theme.spacing(2),
  },
}));
//TODO сделать lazy load
//  const Chat = React.lazy(() => import("./features/chat"))



function App() {
  const isInit = useSelector((state) => state.app.isInit);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  useEffect(() => dispatch(initThunk()), [dispatch]);
  const classes = useStyles();
  if (!isInit) return <div>INITIALIZATION</div>;

  return (
    <>
      <Header />
      <Grid
        container
        className={classes.app__container}
       
      >
        <Grid item xs={2}>
          <Navbar />
          {/* <Users /> */}
        </Grid>
        <Grid item xs={10}>
			<Paper>
          {!isAuth ?  <Login />  : null}
          <Switch>
            <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
            <Route exact path="/profile/:userId?" render={() => <Profile />} />
            <Route exact path="/messages" render={() => <Messages />} />
            <Route exact path="/users" render={() => <Users />} />
            <Route exact path="/chat" render={() => <Chat />} />
            <Route exact path="*" render={() => <div>NOT FOUND 404</div>} />
          </Switch>
		  </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
