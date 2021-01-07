import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";


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
  return (
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
