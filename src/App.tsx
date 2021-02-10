import React from 'react';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { UsersPage } from './pages/UsersPage/UsersPage';
import { useSelector } from 'react-redux';
import { init } from './app/reducers/app-reducer';
import { useEffect } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import MessengerPage from './pages/MessangerPage/MessengerPage';
import { Preloader3 } from './common/preloader3';
import { Container} from '@material-ui/core';
import { Header } from './components/Header/Header';
import { RootState, useAppDispatch } from './app/store';

//TODO сделать lazy load
//  const Chat = React.lazy(() => import("./features/chat"))
function App() {
	const isInit = useSelector((state:RootState) => state.app.isInit);
	const isAuth = useSelector((state:RootState) => state.auth.isAuth);
	const authUserId = useSelector((state:RootState) => state.auth.id);
	const dispatch = useAppDispatch();
	useEffect(() => dispatch(init()), [dispatch]);
	return (
		<Container style={{width:1240}}>
			{!isInit ? (
				<Preloader3 />
			) : !isAuth ? (
				<LoginPage />
			) : (
				<div >
					<Header />
					<Switch>
						<Route exact path={'/profile/' + authUserId} render={() => <Redirect to={'/profile'} />} />
						<Route exact path='/profile/:userId?' render={() => <ProfilePage />} />
						<Route exact path='/users' render={() => <UsersPage />} />
						<Route exact path={'/messenger/' + authUserId} render={() => <Redirect to={'/messenger'} />} />
						<Route exact path='/messenger/:userId?' render={() => <MessengerPage />} />
						<Route exact path='*' render={() => <Redirect to={'/profile'} />} />
					</Switch>
				</div>
			)}
		</Container>
	);
}

export default App;
