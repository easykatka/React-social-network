import React from 'react';
import { Login } from './pages/login/login';
import { Users } from './pages/users/users';
import { useDispatch, useSelector } from 'react-redux';
import { init } from './app/reducers/app-reducer';
import { useEffect } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Profile from './pages/profile/Profile';
import Messenger from './pages/messenger/messenger';
import { Preloader2 } from './common/preloader2';
import { Container, Grid } from '@material-ui/core';
import { Header } from './components/Header/Header';

//TODO сделать lazy load
//  const Chat = React.lazy(() => import("./features/chat"))
function App() {
	const isInit = useSelector((state) => state.app.isInit);
	const isAuth = useSelector((state) => state.auth.isAuth);
	const authUserId = useSelector((state) => state.auth.id);
	const dispatch = useDispatch();
	useEffect(() => dispatch(init()), [dispatch]);

	return (
		<Container>
			{!isInit ? (
				<Preloader2 />
			) : !isAuth ? (
				<Login />
			) : (
				<>
					<Header />
					<Switch>
						<Route exact path={'/profile/' + authUserId} render={() => <Redirect to={'/profile'} />} />
						<Route exact path='/profile/:userId?' render={() => <Profile />} />
						<Route exact path='/users' render={() => <Users />} />
						<Route exact path={'/messenger/' + authUserId} render={() => <Redirect to={'/messenger'} />} />
						<Route exact path='/messenger/:userId?' render={() => <Messenger />} />
						<Route exact path='*' render={() => <Redirect to={'/profile'} />} />
					</Switch>
				</>
			)}
		</Container>
	);
}

export default App;
