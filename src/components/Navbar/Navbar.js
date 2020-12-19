import React from "react";
import '../../index.css';
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	navbar : {
		margin:theme.spacing(1)
	}
  }));

const Navbar = () => {
	 const classes = useStyles();
  return (
    <div className='container'>
		<Grid direction="column"  container className={classes.navbar} wrap="wrap" spacing={2}>
    
        <Grid item xs>
          <NavLink to="/profile" activeClassName='active'>
		  <Button size='small' color="primary"  >My profile</Button>
          </NavLink>
		  </Grid>
		  <Grid item xs>
          <NavLink to="/dialogs" activeClassName='active'>
		  <Button size='small' color="primary"  >Messages</Button>
          </NavLink>
		  </Grid>
		  <Grid item xs>
          <NavLink to="/users" activeClassName='active'>
		  <Button size='small' color="primary"  >Users</Button>
          </NavLink>
		  </Grid>
       <Grid item xs>
		<Button size='small' color="primary"  >News</Button>
        </Grid>
		<Grid item xs>
		<Button size='small' color="primary"  >Music</Button>
        </Grid>
        <Grid item xs>

		<Button size='small' color="primary"  >Settings</Button>
        </Grid>

		</Grid>

	  </div>
  );
};
export default Navbar;
