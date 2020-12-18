import React, { useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "./redux/App-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import { withSuspense } from "./hoc/WIthSuspense";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
); // лези по запросу сделает запрос с сервака
// чтобы подгрузить компоненту

const App = (props) => {
  useEffect(props.initializeApp);
  if (!props.initialized) return <Preloader />;
  return (

      <div className="app-wrapper-content">
        <Header />
        <Navbar />

        <Switch>
          <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route
            path="/users"
            render={() => <UsersContainer pageTitle={"Самураи"} />}
          />
          <Route path="/login" render={() => <Login />} />
          <Route path="*" render={() => <div>404</div>} />
        </Switch>
      </div>
   
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
