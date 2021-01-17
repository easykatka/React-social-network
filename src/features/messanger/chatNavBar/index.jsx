import { Avatar, makeStyles } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDialogs } from '../../../app/reducers/dialogs-reducer';
import devs from '../../../assets/img/devs.jpg';

const useStyles = makeStyles((theme) => ({
	chatNavBar__container: {
		padding: '15px',
		background: '#2f3136',
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: '15px 0px 0px 15px',
	},
	chatNavBar__avatar: {
		margin: 15,
	},
}));

export const ChatNavBar = ({dialogs}) => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDialogs());
	}, []);

	console.log(dialogs);
	const classes = useStyles();
	return (
		<div className={classes.chatNavBar__container}>
			<h4>Chat rooms: </h4>
			<Link to={'/messanger'}>
			<Avatar src={devs} style={{ margin: 10 }} />
			</Link>
			<h4>PM: </h4>
			<div style={{ overflowY: 'auto' }}>
				{dialogs.map((item, idx) => {
					
					return (
						<Link to={`/messanger/${item.id}`} key={item.id}>
							<div className={classes.chatNavBar__avatar}>
								<Avatar src={item?.photos?.small} />
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
