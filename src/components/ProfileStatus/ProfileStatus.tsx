import React from 'react';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import { Grid, InputBase } from '@material-ui/core';
import { useStatus } from './useStatus';
import { profileStatus } from './profileStatus_styles';

interface IProps  {
	routerId: number
}
export const ProfileStatus: React.FC<IProps> = React.memo(({ routerId }) => {
	const [onStatusChange, deactivateMode, editMode, setEditMode, userStatus, status] = useStatus();
	const classes = profileStatus();
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
									<SaveIcon fontSize='small' color='primary' className={classes.icon} onClick={deactivateMode(true)}/>
									<CloseIcon fontSize='small' color='secondary'className={classes.icon}  onClick={deactivateMode(false)}/>
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
