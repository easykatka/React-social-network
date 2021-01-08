import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Grid,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import {logout} from "../../app/reducers/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAuthUser} from "../../app/reducers/profile-reducer";

const useStyles = makeStyles((theme) => ({
  app__container: {
    width: 1200,
    margin: "0 auto",
    maxWidth: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
  header__block: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profile_block: {
    alignItems: "center",
    flexGrow: 1,
  },
}));


export const Header = () => { debugger

  const AuthUser = useSelector((state) => state.profile.AuthUser);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const AuthUserId = useSelector(state => state.auth.id)

  const dispatch = useDispatch();
  useEffect(() => {
	dispatch(getAuthUser(AuthUserId))
  }, []);

  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <div className={classes.app__container}>
        <Toolbar className={classes.header__block}>
          <div className={classes.title}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
            >
              <GitHubIcon color="secondary" />
            </IconButton>
            <Typography variant="h6">Social Media</Typography>
          </div>
          <div style={{ justifyContent: "space-around" }}>
            <Button
              className={classes.title}
              href="https://social-network.samuraijs.com/docs"
              color="primary"
              variant="contained"
            >
              API DOCS
            </Button>
          </div>
          <div>
            {isAuth ? (
              <Grid container spacing={3} className={classes.profile_block}>
                <Grid item>{AuthUser?.fullName}</Grid>
                <Grid item>
                  <Avatar alt="Remy Sharp" src={AuthUser?.photos.large} />
                </Grid>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  onClick={() => dispatch(logout())}
                >
                  LOG OUT
                </Button>
              </Grid>
            ) : (
              <Button size="small" color="primary" variant="contained">
                LOGIN
              </Button>
            )}
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
};
