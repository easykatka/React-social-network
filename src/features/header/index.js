import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { logout } from "../../app/reducers/auth-reducer";
import { useDispatch, useSelector } from "react-redux";


const useStyles = makeStyles(theme => ({

  app__container: {
    width: 1200,
	margin: "0 auto",
	maxWidth:"100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
	width:200,
	display:'flex',
	alignItems:'center',

  },
  header__block: {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	
}
}))

export const Header = () => {
	const login = useSelector((state) => state.auth.login);
	const isAuth = useSelector((state) => state.auth.isAuth);
	const dispatch = useDispatch();
	console.log(login,isAuth)
  const classes = useStyles();
  return (
    <AppBar position="static">
      <div className={classes.app__container} >
        <Toolbar className={classes.header__block} >
          <div className={classes.title} >
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
            >
              <GitHubIcon color="secondary" />
            </IconButton>
            <Typography variant="h6" >
              Social Media
            </Typography>
          </div>
		  <div style={{justifyContent:'space-around'}}>
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
                <div>
                  {login}
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() => dispatch(logout())}
                  >
                    LOG OUT
                  </Button>
                </div>
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