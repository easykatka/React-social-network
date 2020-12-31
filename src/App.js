import React from "react";
import { Header } from "./features/header";
import { Login } from "./features/login";
import { Users } from "./features/users";
import { useDispatch, useSelector } from "react-redux";
import { initThunk } from "./app/reducers/app-reducer";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { Navbar } from "./features/navbar";
import { Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  app__container: {
    width: 1200,
	margin: "0 auto",
	paddingTop:theme.spacing(2)
  },
}));

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
      <Grid container className={classes.app__container} style={{display:'flex'}}>
		  <Grid item xs={2}>
        <Navbar />
        {/* <Users /> */}
		</Grid>
		<Grid item xs={10} >
        {isAuth ? null : <Login />}
		</Grid>
      </Grid>
    </>
  );
}

export default App;
