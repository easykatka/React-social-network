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
import { logout } from "../../app/reducers/auth-reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuthUser } from "../../app/reducers/profile-reducer";

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
		alignItems: "center",
	},
	header__block: {
		justifyContent: "space-between",
	},
	profile_block: {
		alignItems: "center",
	},
}));

export const Header = () => {
	const AuthUser = useSelector((state) => state.profile.AuthUser);
	const isAuth = useSelector((state) => state.auth.isAuth);
	const AuthUserId = useSelector((state) => state.auth.id);

	const dispatch = useDispatch();
	useEffect(() => {
		if (AuthUserId) {
			dispatch(getAuthUser(AuthUserId));
		}
	}, [dispatch, AuthUserId]);

	const classes = useStyles();
	return (
		<AppBar position="sticky">
			<Grid className={classes.app__container}>
				<Toolbar className={classes.header__block}>
					<Grid container className={classes.title}>
						<IconButton
							edge="start"
							className={classes.menuButton}
							aria-label="menu"
						>
							<GitHubIcon color="secondary" />
						</IconButton>
						<Typography variant="h6">Social Media</Typography>
					</Grid>
					<Button
						className={classes.title}
						href="https://social-network.samuraijs.com/docs"
						color="primary"
						variant="contained"
					>
						API DOCS
          </Button>
					<div>
						{isAuth ? (
							<Grid container spacing={3} className={classes.profile_block}>
								<Grid item>{AuthUser?.fullName}</Grid>
								<Grid item>
									<Avatar alt="Remy Sharp" src={AuthUser?.photos.small} />
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
			</Grid>
		</AppBar>
	);
};
