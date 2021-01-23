import { Avatar, Checkbox, FormControlLabel, Grid, InputBase } from '@material-ui/core';
import { Favorite, FavoriteBorderOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';

export const ProfileWall = () => {
	const { authUser, posts } = useSelector((state) => state.profile);
	return (
		<Grid container justify='center' style={{ backgroundColor: '#2f3136', padding: 20 }}>
			<Grid
				container
				direction='row'
				alignItems='center'
				style={{ backgroundColor: '#202225', color: 'white', padding: 20, width: 500, borderRadius: 8 }}>
				<Avatar src={authUser?.photos.small} />
				<Grid>
					<InputBase placeholder='White something' color='primary' />
				</Grid>
			</Grid>

			<div style={{ padding: 30, display: 'flex', flexDirection: 'row' }}>
				{posts?.map((item) => {
					return (
						<>
							<Avatar src={authUser?.photos.small} style={{ marginRight: 20 }} />
							<div item>
								<p>{item.date}</p>
								<p>{item.body}</p>
								<hr />
								<FormControlLabel
									control={<Checkbox icon={<FavoriteBorderOutlined />} checkedIcon={<Favorite />} name='checkedH' />}
									
								/>
								<p>{item.likesCount}</p>
							</div>
						</>
					);
				})}
			</div>
		</Grid>
	);
};
