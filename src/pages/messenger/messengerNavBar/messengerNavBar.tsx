import { Avatar, Badge } from '@material-ui/core';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getDialogs } from '../../../app/reducers/dialogs-reducer';
import { RootState } from '../../../app/store';
import devs from '../../../common/assets/img/devs.jpg';
import { messengerNavBar } from './messengerNavBar_styles';
import { useAppDispatch } from './../../../app/store';

export const ChatNavBar:React.FC = () => {
	const { dialogs } = useSelector((state: RootState) => state.dialogs);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getDialogs());
	}, []);
	const classes = messengerNavBar();
	return (
		<div className={classes.chatNavBar__container}>
			<h4>Chat rooms: </h4>
			<NavLink to={'/messenger'} activeClassName='navchat'>
				<Avatar src={devs} className={classes.chatNavBar__avatar} />
			</NavLink>
			<h4>PM: </h4>
			<div className={classes.chatNavBar__pmContainer}>
				{dialogs.map((item, idx) => {
					return (
						<div className={classes.chatNavBar__avatar} key={idx}>
							<NavLink to={`/messenger/${item.id}`} key={item.id} activeClassName='navchat'>
								<Badge badgeContent={item.newMessagesCount} color='secondary'>
									<Avatar src={item?.photos?.small} />
								</Badge>
							</NavLink>
						</div>
					);
				})}
			</div>
		</div>
	);
};
