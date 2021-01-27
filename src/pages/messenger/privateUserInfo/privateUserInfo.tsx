import { Avatar, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Preloader } from '../../../common/preloader';
import { dateHelper } from '../../../common/dateHelper';
import { privateUserInfo } from './privateUserInfo_styles';
import { RootState } from '../../../app/store';
import { dialogsArrayType } from '../../../common/types/types';

type PropsType = {
	recipient:dialogsArrayType
}

export const PrivateUserInfo:React.FC<PropsType> = ({recipient}) => {
	const { dialogsFetching } = useSelector((state:RootState) => state.dialogs);
	const classes = privateUserInfo();
	//* РАБОЧИЙ КОМПОНЕНТ
	return (
		<>
			<Link to={'/profile/' + recipient?.id}>
				<Grid container direction='column' alignItems='center' justify='space-around' className={classes.privateUserInfo__container}>
					
							<h2>{recipient?.userName}</h2>
							<Avatar alt='profile avatar' src={recipient?.photos.large} className={classes.privateUserInfo__avatar} />
							<Grid container direction='column' alignItems='center'>
								<div> Was online:</div>
								<div>{recipient?.lastUserActivityDate && dateHelper(recipient?.lastUserActivityDate)}</div>
							</Grid>
						
				</Grid>
			</Link>
	</>
	);
};
