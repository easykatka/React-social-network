import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'


const useStyles = makeStyles((theme) => ({
  navbar__container: {},
  navbar__item:{width:'100%',
justifyContent:'left'},
}))

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
              <Button className={classes.navbar__item} startIcon={<PermIdentityIcon/>} > My profile</Button>
          </NavLink>
        </Grid>
        <Grid item xs >
          <NavLink to="/users" activeClassName="active">
		  <Button className={classes.navbar__item} startIcon={<PeopleOutlineIcon/>} > Users</Button>
          </NavLink>
        </Grid>
        <Grid item xs>
		<NavLink to="/chat" activeClassName="active">
		<Button  className={classes.navbar__item} startIcon={<ChatBubbleOutlineIcon/>}> Chat</Button>
		</NavLink>
        </Grid>
      </Grid>
  );
};
