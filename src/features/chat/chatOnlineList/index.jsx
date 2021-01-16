import { Avatar, Badge, Grid, makeStyles, Typography, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
const StyledBadge = withStyles((theme) => ({
	badge: {
		backgroundColor: '#44b700',
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
		},
	},
}))(Badge);

const useStyles = makeStyles((theme) => ({
	chatOnlineList__item: {
		margin: '0px 20px',
	},
	chatOnlineList__container: {
		padding: theme.spacing(1),
	},
}));

export const ChatOnlineList = ({ messages }) => {
	// как это блять работает?
	let chatList = messages.filter(((temp) => (a) => !temp[a.userId] && (temp[a.userId] = true))(Object.create(null)));

	console.log(chatList);
	const classes = useStyles();
	return (
		<Grid item xs className={classes.chatOnlineList__container}>
			<h3>Online — {chatList.length}</h3>
			{chatList.map((i, idx) => {
				return (
					<Link to={'/profile/' + i.userId} style={{ color: 'black' }} key={idx}>
						<Grid container alignItems='center' spacing={1} className={classes.chatOnlineList__item}>
							<Grid item>
								<StyledBadge
									overlap='circle'
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'right',
									}}
									variant='dot'>
									<Avatar alt='Remy Sharp' src={i.photo} />
								</StyledBadge>
							</Grid>
							<Typography variant='h6'> {i.userName}</Typography>
						</Grid>
					</Link>
				);
			})}
		</Grid>
	);
};
