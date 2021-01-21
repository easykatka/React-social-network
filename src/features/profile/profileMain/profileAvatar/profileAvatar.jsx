import { Avatar, IconButton } from '@material-ui/core';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { useDispatch } from 'react-redux';
import { putNewAvatar } from '../../../../app/reducers/profile-reducer';
import { profileAvatar, StyledBadge } from './profileAvatar_styles';
import React from 'react';

export const ProfileAvatar = React.memo(({ profile, routerId }) => {
	const classes = profileAvatar();
	const dispatch = useDispatch();
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
								onChange={(e) => dispatch(putNewAvatar(e.target.files[0]))}
							/>
							<label htmlFor='contained-button-file'>
								<IconButton variant='contained' color='primary' className={classes.profileAvatar__uploadBtn} component='span'>
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
