import React, { useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Header} from "./components/Header/Header";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";
import { initializeAppThunk } from "./redux/App-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import { withSuspense } from "./hoc/WIthSuspense";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
); // лези по запросу сделает запрос с сервака
// чтобы подгрузить компоненту

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 auto",
    width: 900,
  },
}));

const App = () => {
  const classes = useStyles();
  const isInitializeApp = useSelector((state) => state.app.isInitialized);
	const dispatch = useDispatch()
  useEffect(() => dispatch(initializeAppThunk()), []);

  if (!isInitializeApp) return <Preloader />;
  return (
    <>
      <Header />
      <div className={classes.root}>
        <Grid container className="container">
            <Grid item xs={2} wrap>
              <Navbar />
            </Grid>
            <Grid item xs={6}>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Redirect to={"/profile"} />}
                />
                <Route
                  path="/dialogs"
                  render={withSuspense(DialogsContainer)}
                />
                <Route
                  path="/profile/:userId?"
                  render={() => <ProfileContainer />}
                />
                <Route
                  path="/users"
                  render={() => <UsersContainer pageTitle={"Самураи"} />}
                />
                <Route path="/login" render={() => <Login />} />
                <Route path="*" render={() => <div>404</div>} />
              </Switch>
            </Grid>
          </Grid>
      </div>
    </>
  );
};
export default withRouter(App);
