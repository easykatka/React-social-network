import { Avatar, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { dateHelper } from '../../../common/dateHelper';
import { privateUserInfo } from './privateUserInfo_styles';
import { dialogsArrayType } from '../../../common/types/types';

type PropsType = {
	recipient:dialogsArrayType,
	routerId:number
}

export const PrivateUserInfo:React.FC<PropsType> = ({recipient,routerId}) => {
	const classes = privateUserInfo();
	//* РАБОЧИЙ КОМПОНЕНТ
	return (
		<>
			<Link to={'/profile/' + routerId}>
				<Grid container direction='column' alignItems='center' justify='space-around' className={classes.root}>
					
							<h2>{recipient?.userName}</h2>
							<Avatar alt='profile avatar' src={recipient?.photos.large} className={classes.avatar} />
							<Grid container direction='column' alignItems='center'>
								<div> Was online:</div>
								<div>{recipient?.lastUserActivityDate && dateHelper(recipient?.lastUserActivityDate)}</div>
							</Grid>
						
				</Grid>
			</Link>
	</>
	);
};
