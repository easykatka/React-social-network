import { Avatar, Chip } from '@material-ui/core';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getDialogs } from '../../app/reducers/dialogs-reducer';
import { RootState } from '../../app/store';
import devs from '../../common/assets/img/devs.jpg';
import { messengerNavBar, NavBadge } from './chatNavBar_styles';
import { useAppDispatch } from '../../app/store';
import defaultAvatar from '../../common/assets/img/defaultAvatar.png'

export const ChatNavBar: React.FC = () => {
	const { dialogs } = useSelector((state: RootState) => state.dialogs);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getDialogs());
	}, []);
	const classes = messengerNavBar();
	return (
		<div className={classes.root}>
			<h4>Chat rooms: </h4>
			<NavLink to={'/messenger'} activeClassName='navchat'>
				<Avatar src={devs} />
			</NavLink>
			<h4>PM: </h4>
			<div className={classes.pmWrapper}>
				{dialogs.map((item, idx) => {
					return (
						<NavLink to={`/messenger/${item.id}`} key={item.id} activeClassName='navchat'>
							<NavBadge badgeContent={item.newMessagesCount} color='secondary' >
								<Chip key={idx}
									className={classes.chip}
									avatar={<Avatar src={item?.photos?.small || defaultAvatar} />}
									label={item?.userName}
									clickable
								></Chip>
							</NavBadge>
						</NavLink>
					);
				})}
			</div>
		</div >
	);
};
