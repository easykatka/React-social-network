import { Avatar, IconButton } from '@material-ui/core';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { updateAvatar } from '../../app/reducers/profile-reducer';
import { profileAvatar, StyledBadge } from './profileAvatar_styles';
import React from 'react';
import { profileDataType } from '../../common/types/types';
import { RootState, useAppDispatch } from '../../app/store';
import defaultAvatar from '../../common/assets/img/defaultAvatar.png'
import { useSelector } from 'react-redux';
import { Preloader3 } from '../../common/preloader3';

type PropsType = {
	profile: profileDataType
	routerId: number
}


export const ProfileAvatar: React.FC<PropsType> = React.memo(({ profile, routerId }) => {
	const classes = profileAvatar();
	const avatarIsLoading = useSelector((state: RootState) => state.profile.avatarIsLoading)
	const dispatch = useAppDispatch();

	return (
		<div className={classes.root}>
			{avatarIsLoading ? <Preloader3 /> :
				!routerId ? (
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
									<IconButton color='primary' className={classes.uploadButton} component='span'>
										<AddAPhotoOutlinedIcon />
									</IconButton>
								</label>
							</>
						}
						color='secondary'>
						<Avatar className={classes.avatar} alt='user foto' src={profile.photos?.large} />
					</StyledBadge>
				) : (
						<Avatar className={classes.avatar} alt='user foto' src={profile.photos?.large || defaultAvatar} />
					)



			}
		</div>
	);
});
