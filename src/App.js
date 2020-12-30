import React from "react";
import { Header } from "./features/header";
import {Login} from "./features/login"
import {Users} from "./features/users"
import { useDispatch, useSelector } from "react-redux";
import { initThunk } from './app/reducers/app-reducer'
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  app__container: {
	width: 1200 ,
    margin: 'auto'
  },
}));

function App() {
	const isInit = useSelector((state) => state.app.isInit);
	const isAuth = useSelector((state) => state.auth.isAuth)
	const dispatch = useDispatch()
  useEffect(() => dispatch(initThunk()), [dispatch]);
  if (isInit) {<div>dada</div>}
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
        <Header />
		<Users/>
		{isAuth ? null : <Login/>}
      </div>
 
  );
}

export default App;
