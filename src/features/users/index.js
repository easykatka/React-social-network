import {  Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getUsers, setCurrentPage, setPageSize } from '../../app/reducers/users-reducer'
import TablePagination from '@material-ui/core/TablePagination'
import {FollowUnfollow} from '../components/follow-unfollow'

export const Users =	 () => {
	const users = useSelector((state) => state.users.users)
	const currentPage = useSelector((state) => state.users.currentPage)
	const pageSize = useSelector((state) => state.users.pageSize)
	const totalUsersCount = useSelector((state) => state.users.totalUsersCount)
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(getUsers(currentPage, pageSize))
	}, [currentPage, pageSize,])
	const handleChangePage = (event, newPage) => {
		dispatch(setCurrentPage(newPage))
	}
	const handleChangeRowsPerPage = (event) => {
		dispatch(setPageSize(parseInt(event.target.value, 10)))
		dispatch(setCurrentPage(1))
	}

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
							<Grid item xs={4} key={user.id}>
								<Card raised={true} style={{ height: 360,justify:'center' }}>
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
									<FollowUnfollow id={user.id} followed={user.followed} />
									</CardActions>
								</Card>
							</Grid>
						))}
			</Grid>
		</div>
	)
}
