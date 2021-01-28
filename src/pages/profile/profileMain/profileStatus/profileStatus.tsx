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
	console.log('render status')
	const [onStatusChange, deactivateMode, editMode, setEditMode, userStatus, status] = useStatus();
	const classes = profileStatus();
	return (
		<Grid container justify='space-around'>
			<Grid item>
				{editMode && !routerId ? (
					<Grid component='form' onSubmit={deactivateMode(true)}>
						<InputBase
							className={classes.profileAvatar__input}
							autoFocus={true}
							onChange={onStatusChange}
							value={userStatus}
							endAdornment={
								<>
									<IconButton onClick={deactivateMode(true)}>
										<SaveIcon fontSize='small' color='primary' />
									</IconButton>
									<IconButton color='inherit' onClick={deactivateMode(false)}>
										<CloseIcon fontSize='small' color='secondary' />
									</IconButton>
								</>
							} />
					</Grid>
				) : (
						<Grid>
							<span
								className={classes.profileAvatar__status}
								onClick={() => {
									setEditMode(true);
								}}>
								{status}
								<span>{!routerId && <EditIcon className={classes.profileAvatar__editIcon} color='inherit' />}</span>
							</span>
						</Grid>
					)}
			</Grid>
		</Grid>
	);
});
