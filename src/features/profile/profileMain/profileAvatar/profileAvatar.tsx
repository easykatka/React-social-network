import { Avatar, IconButton } from '@material-ui/core';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { updateAvatar } from '../../../../app/reducers/profile-reducer';
import { profileAvatar, StyledBadge } from './profileAvatar_styles';
import React from 'react';
import { profileDataType } from '../../../../common/types/types';
import { useAppDispatch } from './../../../../app/store';

type PropsType = {
	profile: profileDataType
	routerId: number
}


export const ProfileAvatar: React.FC<PropsType> = React.memo(({ profile, routerId }) => {
	const classes = profileAvatar();
	const dispatch = useAppDispatch();
	return (
		<>
			{!routerId ? (
				<StyledBadge
					badgeContent={
						<>
							<input
								accept='image/*'
								id='contained-button-file'
								type='file'
								style={{ display: 'none' }}
								onChange={(e) => e.target.files && dispatch(updateAvatar(e.target.files[0]))}
							/>
							<label htmlFor='contained-button-file'>
								<IconButton color='primary' className={classes.profileAvatar__uploadBtn} component='span'>
									<AddAPhotoOutlinedIcon />
								</IconButton>
							</label>
						</>
					}
					color='secondary'>
					<Avatar className={classes.profileAvatar__avatar} alt='user foto' src={profile.photos?.large} />
				</StyledBadge>
			) : (
					<Avatar className={classes.profileAvatar__avatar} alt='user foto' src={profile.photos?.large} />
				)}
		</>
	);
});
