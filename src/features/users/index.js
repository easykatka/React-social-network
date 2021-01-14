import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getUsers, setCurrentPage, setPageSize } from '../../app/reducers/users-reducer'
import TablePagination from '@material-ui/core/TablePagination'
import { FollowUnfollow } from '../components/follow-unfollow'
import { Preloader } from '../../common/preloader'
import defaultAvatar from '../../img/defaultAvatar.png'

export const Users = () => {
	const { users, currentPage, pageSize, isFetching, totalUsersCount } = useSelector((state) => state.users)
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(getUsers(currentPage, pageSize))
	}, [currentPage, pageSize])

	const handleChangePage = (event, newPage) => {
		dispatch(setCurrentPage(newPage))
	}

	const handleChangeRowsPerPage = (event) => {
		dispatch(setPageSize(parseInt(event.target.value, 10)))
		dispatch(setCurrentPage(1))
	}
	return (
		<div className='container'  >
			<Grid container direction='column' alignItems='center' >
				<Typography variant='h4'>Users </Typography>
				<TablePagination
					component='div'
					count={totalUsersCount}
					page={currentPage}
					onChangePage={handleChangePage}
					rowsPerPage={pageSize}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Grid>
			{isFetching ? <Preloader /> :
				<Grid container spacing={5}  style={{overflowY:'scroll' , height:500 , marginTop:10}}>
					{users &&
						users
							// .filter((u) => u.photos.small != null)
							.map((user) => (
								<Grid item xs={3} key={user.id}  >
									<Card raised={true} >
										<CardActionArea style={{ height: "100%"}}>
											<NavLink to={'/profile/' + user.id}>
												<CardMedia style={{ height:210}}  image={user?.photos.large || defaultAvatar} title='user photo' />
												<CardContent>
													<Typography gutterBottom variant='h5' component='h2'>
														{user?.name}{' '}
													</Typography>
													<Typography variant='body2' color='textSecondary' component='p'>
														{user?.status || "😡"}{' '}
													</Typography>
												</CardContent>
											</NavLink>
										</CardActionArea>
											<FollowUnfollow id={user.id} followed={user.followed} />
									</Card>
								</Grid>
							))}
				</Grid>}
		</div>
	)
}
