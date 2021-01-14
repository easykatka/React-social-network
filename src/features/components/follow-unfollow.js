import { Button } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { followUser, unfollowUser } from "../../app/reducers/users-reducer"
import React from 'react'



export const FollowUnfollow = ({ id, followed }) => {
	const followingInProgress = useSelector((state) => state.users.followingInProgress)
	const dispatch = useDispatch()

	return (
		<>
	
			{followed ?
				(
					<Button


						color='secondary'
						variant='contained'
						fullWidth
						disabled={followingInProgress.some((item) => item === id)}
						onClick={() => {dispatch(followUser(id , true))}}>
						UNFRIEND
					</Button>

			
				) : (
					<Button
						color='primary'
						fullWidth
						variant='contained'
						disabled={followingInProgress.some((item) => item === id)}
						onClick={() => {dispatch(followUser(id , false))}}>
						FREIND
					</Button>
				)}
	</>
	)
}