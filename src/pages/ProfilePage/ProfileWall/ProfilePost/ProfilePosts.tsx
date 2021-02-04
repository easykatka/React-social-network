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
		<div className={classes.root}>
			<div className={classes.container}>
				{posts?.map((item, idx) => {
					return (
						<div key={item.date} className={classes.postWrapper}>
							<Avatar className={classes.avatar} src={item.userId ? authUser.photos?.small : profile.photos?.small} />
							<div>
								<Grid container direction='row' alignItems='center' >
									<p className={classes.fullName}>{item.userId ? authUser.fullName : profile.fullName}</p>
									<p className={classes.date}>{dateHelper(item.date, 0)}</p>
								</Grid>
								<span className={classes.body}>{item.body}</span>
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