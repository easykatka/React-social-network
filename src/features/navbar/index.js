import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  navbar__container: {},
  tabs: {
    "&>button": {
      width: "100%",
    },
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    // <Tabs
    //   orientation="vertical"
    //   value={value}
    //   onChange={handleChange}
    //   className={classes.tabs}
    // >
    //   <NavLink to="/profile">
    //     <Tab label="My Profile" />
    //   </NavLink>
    //   <NavLink to="/messages">
    //     <Tab label="Messages" />{" "}
    //   </NavLink>
	//   <NavLink to="/users">
    //     <Tab label="Users" />{" "}
    //   </NavLink>
	//   <NavLink to="/chat">
    //     <Tab label="Chat" />{" "}
    //   </NavLink>

    // </Tabs>

      <Grid
        direction="column"
        container
        className={classes.navbar__container}
    	spacing={2}

      >
        <Grid  item xs>
          <NavLink  to="/profile" activeClassName="active">
              <Button  fullWidth> My profile</Button>
          </NavLink>
        </Grid>
        <Grid item xs>
          <NavLink to="/messages" activeClassName="active">
		  <Button fullWidth> Messages</Button>
          </NavLink>
        </Grid>
        <Grid item xs >
          <NavLink to="/users" activeClassName="active">
		  <Button fullWidth> Users</Button>
          </NavLink>
        </Grid>
        <Grid item xs>
		<NavLink to="/chat" activeClassName="active">
		<Button fullWidth> Chat</Button>
		</NavLink>
        </Grid>
      </Grid>
  );
};
