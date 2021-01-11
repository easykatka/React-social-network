import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from "react-router-dom";
import { followUser, getUsers, unfollowUser } from '../../app/reducers/users-reducer';



export const Users = () => {
	const users = useSelector(state => state.users.users)
	const currentPage = useSelector(state => state.users.currentPage)
	const pageSize = useSelector(state => state.users.pageSize)
	const followingInProgress = useSelector(state => state.users.followingInProgress)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getUsers(currentPage, pageSize))
	},
		[])
	console.log(users)


	return (
		<div className='container' style={{ flexGrow: '1' }}>
			paginator
			<Grid container
		
				spacing={5}
				direction="row"
				justify="center"
				alignItems="center" >

				{users && users.filter(u => u.photos.small != null).map((user) => (

					<Grid item xs={4} key={user.userId} >
						<Card raised={true}  	style={{height:'400px'}}>
							<CardActionArea >
								<NavLink to={"/profile/" + user.id}>
									<CardMedia
										style={{ height: '200px' }}
										image={user.photos.large}
										title="user photo" />

									<CardContent>
										<Typography gutterBottom variant="h5" component="h2">{user?.name} </Typography>
										<Typography variant="body2" color="textSecondary" component="p">
											{user?.status}  </Typography>
									</CardContent>
								</NavLink>
							</CardActionArea>

							<CardActions>
								{user.followed ? (
									<Button
										color='primary'
										variant='outlined'
										disabled={followingInProgress.some((id) => id === user.id)}
										onClick={() => {
											unfollowUser(user.id);
										}}>
										Unfollow
									</Button>
								) : (
										<Button
											color='primary'
											variant='outlined'
											disabled={followingInProgress.some((id) => id === user.id)}
											onClick={() => {
												followUser(user.id);
											}}>
											Follow
										</Button>
									)}
							</CardActions>
						</Card>
					</Grid>
				)
				)
				}
			</Grid>
		</div>
	)
}
