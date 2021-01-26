import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { dateHelper } from '../../../../common/dateHelper'
import { Favorite, FavoriteBorder } from '@material-ui/icons';
import { Avatar, Checkbox, FormControlLabel, Grid } from '@material-ui/core';
import { useAppDispatch } from '../../../../app/store';
import { setLike } from "../../../../app/reducers/profile-reducer";
import { profilePosts } from "./profilePosts_styles";

export const ProfilePosts: React.FC = () => {
	const { authUser, posts, profile } = useSelector((state: RootState) => state.profile);
	const dispatch = useAppDispatch()
	const classes = profilePosts()
	return (
		<div className={classes.profilePosts__container}>
			<div className={classes.profilePosts__content}>
				{posts?.map((item, idx) => {
					return (
						<div key={item.date} className={classes.profilePosts__item}>
							<Avatar className={classes.profilePosts__avatar} src={item.userId ? authUser.photos?.small : profile.photos?.small} />
							<div>
								<p className={classes.profilePosts__date}>{dateHelper(item.date, 0)}</p>
								<span className={classes.profilePosts__body}>{item.body}</span>
								<Grid container alignItems='center'>
									<FormControlLabel
										onChange={(e) => dispatch(setLike({ like: e.target, idx }))}
										control={
											<Checkbox checked={item.isLiked} icon={<FavoriteBorder />} checkedIcon={<Favorite />} name='checkedH	' />
										}
										label={item.likesCount}
									/>
								</Grid>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	)
}