import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { followUser, getUsers, setCurrentPage, unfollowUser, setPageSize } from '../../app/reducers/users-reducer'
import TablePagination from '@material-ui/core/TablePagination'

export const Users =	 () => {
	const users = useSelector((state) => state.users.users)
	const currentPage = useSelector((state) => state.users.currentPage)
	const pageSize = useSelector((state) => state.users.pageSize)
	const followingInProgress = useSelector((state) => state.users.followingInProgress)
	const totalUsersCount = useSelector((state) => state.users.totalUsersCount)
	const dispatch = useDispatch()
	

	useEffect(() => {
		dispatch(getUsers(currentPage, pageSize))
	}, [currentPage, pageSize,dispatch])
	const handleChangePage = (event, newPage) => {
		dispatch(setCurrentPage(newPage))
	}

	const handleChangeRowsPerPage = (event) => {
		dispatch(setPageSize(parseInt(event.target.value, 10)))
		dispatch(setCurrentPage(1))
	}
	console.log(currentPage,pageSize)

	return (
		<div className='container' >
			<div style={{ display: 'flex',flexDirection:'column', alignItems: 'center' }}>
				<Typography variant='h4'>Users </Typography>
				<TablePagination
					component='div'
					count={totalUsersCount}
					page={currentPage}
					onChangePage={handleChangePage}
					rowsPerPage={pageSize}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</div>

			<Grid container spacing={5} direction='row' justify='center' alignItems='center'>
				{users &&
					users
						.filter((u) => u.photos.small != null)
						.map((user) => (
							<Grid item xs={6} key={user.id}>
								<Card raised={true} style={{ height: '400px' }}>
									<CardActionArea>
										<NavLink to={'/profile/' + user.id}>
											<CardMedia style={{ height: '200px' }} image={user.photos.large} title='user photo' />
											<CardContent>
												<Typography gutterBottom variant='h5' component='h2'>
													{user?.name}{' '}
												</Typography>
												<Typography variant='body2' color='textSecondary' component='p'>
													{user?.status}{' '}
												</Typography>
											</CardContent>
										</NavLink>
									</CardActionArea>
									<CardActions>
										{user.followed ? (
											<Button
												color='secondary'
												variant='contained'
												fullWidth
												disabled={followingInProgress.some((id) => id === user.id)}
												onClick={() => {
													dispatch(unfollowUser(user.id))
												}}>
												Unfollow
											</Button>
										) : (
												<Button
													color='primary'
													fullWidth
													style={{ position: 'relative ', down: 0, left: 0 }}
													variant='contained'
													disabled={followingInProgress.some((id) => id === user.id)}
													onClick={() => {
														dispatch(followUser(user.id))
													}}>
													Follow
												</Button>
											)}
									</CardActions>
								</Card>
							</Grid>
						))}
			</Grid>
		</div>
	)
}
