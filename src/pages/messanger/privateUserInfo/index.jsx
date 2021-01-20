import { Grid, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Preloader } from '../../../common/preloader';
import { dateHelper } from '../../../common/dateHelper';

const useStyles = makeStyles((theme) => ({
	privateUserInfo__container: {
		padding: '15px 0px',
		background: '#2f3136',
		color: 'white',
		borderRadius: '0 15px 15px 0px',
		height: 600,
		color: '#8e9297',
		position: 'relative',
		'&:hover': {
			color: 'white',
		},
	},
	privateUserInfo__avatar: {
		borderRadius: '50%',
		width: '70%',
	},
}));

export const PrivateUserInfo = ({ recipient }) => {
	const { dialogsFetching } = useSelector((state) => state.dialogs);
	const classes = useStyles();
	//* РАБОЧИЙ КОМПОНЕНТ
	return (
		<Grid item xs={3}>
			<Link to={'/profile/' + recipient?.id}>
				<Grid container direction='column' alignItems='center' justify='space-around' className={classes.privateUserInfo__container}>
					{dialogsFetching ? (
						<Preloader />
					) : (
						<>
							<h2>{recipient?.userName}</h2>
							<img src={recipient?.photos.large} className={classes.privateUserInfo__avatar} />
							<Grid container direction='column' alignItems='center'>
								<div> Was online:</div>
								<div>{recipient?.lastUserActivityDate && dateHelper(recipient?.lastUserActivityDate)}</div>
							</Grid>
						</>
					)}
				</Grid>
			</Link>
		</Grid>
	);
};
