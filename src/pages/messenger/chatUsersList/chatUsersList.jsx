import { Avatar, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { chatUsersList, StyledBadge } from './chatUsersList_styles';


export const ChatUsersList = ({ users }) => {
	const classes = chatUsersList();
	return (
		<Grid item xs={3} className={classes.chatList__container}>
			<h4>Users — {users?.length}</h4>
			<div className={classes.chatList__usersContainer}>
				{users?.map((i, idx) => {
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
								<p style={{ marginLeft: 12 }} variant='h6'>
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
