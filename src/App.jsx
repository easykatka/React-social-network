import React from 'react';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Users } from './pages/UsersPage/Users';
import { useDispatch, useSelector } from 'react-redux';
import { init } from './app/reducers/app-reducer';
import { useEffect } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import MessengerPage from './pages/MessangerPage/MessengerPage';
import { Preloader2 } from './common/preloader2';
import { Container} from '@material-ui/core';
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
				<LoginPage />
			) : (
				<>
					<Header />
					<Switch>
						<Route exact path={'/profile/' + authUserId} render={() => <Redirect to={'/profile'} />} />
						<Route exact path='/profile/:userId?' render={() => <ProfilePage />} />
						<Route exact path='/users' render={() => <Users />} />
						<Route exact path={'/messenger/' + authUserId} render={() => <Redirect to={'/messenger'} />} />
						<Route exact path='/messenger/:userId?' render={() => <MessengerPage />} />
						<Route exact path='*' render={() => <Redirect to={'/profile'} />} />
					</Switch>
				</>
			)}
		</Container>
	);
}

export default App;
