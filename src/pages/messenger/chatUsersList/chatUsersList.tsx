import { Avatar, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../app/store';
import { chatUsersList, StyledBadge } from './chatUsersList_styles';


export const ChatUsersList:React.FC = () => {
	const { messages } = useSelector((state: RootState) => state.chat);
	const usersList = messages.filter(((temp) => (a:any) => !temp[a.userId] && (temp[a.userId] = true))(Object.create(null)));

	const classes = chatUsersList();
	return (
		<Grid item xs={3} className={classes.chatList__container}>
			<h4>Users — {usersList?.length}</h4>
			<div className={classes.chatList__usersContainer}>
				{usersList?.map((i, idx) => {
					return (
						<Link to={`/messenger/${i.userId || i.id}`} key={idx}>
							<Grid container alignItems='center' className={classes.chatList__item}>
								<Grid item>
									<StyledBadge
										overlap='circle'
										anchorOrigin={{
											vertical: 'bottom',
											horizontal: 'right',
										}}
										variant='dot'>
										<Avatar alt='Remy Sharp' src={i?.photo} className={classes.chatList__avatar} />
									</StyledBadge>
								</Grid>
								<p style={{ marginLeft: 12 }}>
									{' '}
									{i.userName}
								</p>
							</Grid>
						</Link>
					);
				})}
			</div>
		</Grid>
	);
};
