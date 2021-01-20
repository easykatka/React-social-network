import React from 'react';
import { Header } from './features/header';
import { Login } from './pages/login';
import { Users } from './features/users';
import { useDispatch, useSelector } from 'react-redux';
import { init } from './app/reducers/app-reducer';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Profile from './features/profile/Profile';
import Messenger from './pages/messenger/messenger';
import { Preloader } from './common/preloader';

const useStyles = makeStyles((theme) => ({
	app__container: {
		width: 1200,
		margin: '0 auto',
		paddingTop: theme.spacing(1),
	},
}));
//TODO сделать lazy load
//  const Chat = React.lazy(() => import("./features/chat"))
function App() {
	const isInit = useSelector((state) => state.app.isInit);
	const isAuth = useSelector((state) => state.auth.isAuth);
	const authUserId = useSelector((state) => state.auth.id);
	const dispatch = useDispatch();
	useEffect(() => dispatch(init()), [dispatch]);
	const classes = useStyles();
	if (!isInit) {
		return <Preloader />;
	}
	return (
		<>
			<Header />
			<div className={classes.app__container}>
				{!isAuth ? (
					<Login />
				) : (
					<Switch>
						<Route exact path='/' render={() => <Redirect to={'/profile'} />} />
						<Route exact path={'/profile/' + authUserId} render={() => <Redirect to={'/profile'} />} />
						<Route exact path='/profile/:userId?' render={() => <Profile />} />
						<Route exact path='/users' render={() => <Users />} />
						<Route exact path={'/messenger/' + authUserId} render={() => <Redirect to={'/messenger'} />} />
						<Route exact path='/messenger/:userId?' render={() => <Messenger />} />
						<Route exact path='*' render={() => <div>NOT FOUND 404</div>} />
					</Switch>
				)}
			</div>
		</>
	);
}

export default App;
