import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import { Grid, InputBase } from '@material-ui/core';
import { useStatus } from './useStatus';
import { profileStatus } from './profileStatus_styles';

type PropsType = {
	routerId: number
}
export const ProfileStatus: React.FC<PropsType> = React.memo(({ routerId }) => {
	const [onStatusChange, deactivateMode, editMode, setEditMode, userStatus, status] = useStatus();
	const classes = profileStatus();
	return (
		<div className={classes.profileStatus__container}>
			{editMode && !routerId ? (
				<Grid component='form' onSubmit={deactivateMode(true)}>
					<InputBase
						className={classes.profileStatus__input}
						autoFocus={true}
						onChange={onStatusChange}
						value={userStatus}
						endAdornment={
							<>
									<SaveIcon fontSize='small' color='primary' className={classes.profileStatus__icon} onClick={deactivateMode(true)}/>
									<CloseIcon fontSize='small' color='secondary'className={classes.profileStatus__icon}  onClick={deactivateMode(false)}/>
							</>
						} />
				</Grid>
			) : (
					<Grid>
						<span
							className={classes.profileStatus__status}
							onClick={() => {
								setEditMode(true);
							}}>
							{status}
							<span>{!routerId && <EditIcon className={classes.profileStatus__icon} color='inherit' />}</span>
						</span>
					</Grid>
				)}
		</div>
	);
});
