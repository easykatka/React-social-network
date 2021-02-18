import React from 'react';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import { Grid, InputBase } from '@material-ui/core';
import { profileStatus } from './profileStatus_styles';
import { RootState, useAppDispatch } from '../../app/store';
import { useSelector } from 'react-redux';
import { updateStatus } from '../../app/reducers/profile-reducer';

interface IProps {
	routerId: number
}
export const ProfileStatus: React.FC<IProps> = React.memo(({ routerId }) => {
	const [editMode, setEditMode] = React.useState(false);
	const [userStatus, setUserStatus] = React.useState('');
	const status = useSelector((state: RootState) => state.profile.status);
	const dispatch = useAppDispatch();
	React.useEffect(() => {
		setUserStatus(status);
	}, [status]);
	const deactivateMode = (action: boolean) => () => {
		if (!action) {
			setEditMode(false);
		} else {
			setEditMode(false);
			userStatus && dispatch(updateStatus(userStatus));
		}
	};
	const classes = profileStatus();
	const onStatusChange = ((event: React.ChangeEvent<HTMLInputElement>): void => {
		setUserStatus(event.target.value);
	})
	return (
		<div className={classes.root}>
			{editMode && !routerId ? (
				<Grid component='form' onSubmit={deactivateMode(true)}>
					<InputBase
						className={classes.input}
						autoFocus={true}
						onChange={onStatusChange}
						value={userStatus}
						endAdornment={
							<>
								<SaveIcon fontSize='small' color='primary' className={classes.icon} onClick={deactivateMode(true)} />
								<CloseIcon fontSize='small' color='secondary' className={classes.icon} onClick={deactivateMode(false)} />
							</>
						} />
				</Grid>
			) : (
					<Grid>
						<span
							className={classes.status}
							onClick={() => {
								setEditMode(true);
							}}>
							{status}
							<span>{!routerId && <EditIcon className={classes.icon} color='inherit' />}</span>
						</span>
					</Grid>
				)}
		</div>
	);
});
