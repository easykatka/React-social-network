import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, setCurrentPage, setFilter, setPageSize, setUsers } from '../../app/reducers/users-reducer';
import TablePagination from '@material-ui/core/TablePagination';
import { useDebounce } from '../../common/useDebounce';
import { RootState } from '../../app/store';
import { usersFilter } from './usersFilter_styles'


export const UsersFilter: React.FC = () => {
	const { currentPage, pageSize, totalUsersCount, filter } = useSelector((state: RootState) => state.users);
	const classes = usersFilter();
	const dispatch = useDispatch();
	const debouncedSearchTerm = useDebounce(filter.searchTerm, 1000);
	const debouncedCurrentPage = useDebounce(currentPage, 500)
	// получения списка пользователей и обновление его при изменении параметров
	
	useEffect(() => {
		dispatch(getUsers(debouncedCurrentPage, pageSize, debouncedSearchTerm, filter.friend))
		return () => {
			dispatch(setUsers([]))
		}
	}, [dispatch, debouncedCurrentPage, pageSize, debouncedSearchTerm, filter.friend])




	const radioValues = [
		{ value: 'null', label: 'All' },
		{ value: 'true', label: 'Friends' },
		{ value: 'false', label: 'Without friend' },
	];

	return (
		<Grid container className={classes.root}>
			<TextField label='Search people'
				onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
					dispatch(setFilter({ searchTerm: event.target.value }))
				}}
				id='searchTerm'
				name='searchTerm'
				value={filter.searchTerm} />
			<FormControl component='fieldset' >
				<RadioGroup row aria-label='position'
					name='position'
					value={filter.friend}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(setFilter({ friend: e.target.value }))}  >
					{radioValues.map((item) => {
						return (
							<FormControlLabel key={item.label}
								value={item.value}
								control={<Radio size='small' color='primary' />}
								label={item.label}
							/>
						);
					})}
				</RadioGroup>
			</FormControl>
			<TablePagination
				component='div'
				count={totalUsersCount}
				page={currentPage}
				onChangePage={(_, newPage: number) => { dispatch(setCurrentPage(newPage)) }}
				rowsPerPage={pageSize}
				onChangeRowsPerPage={(event: React.ChangeEvent<HTMLInputElement>) => { dispatch(setPageSize(parseInt(event.target.value, 10))) }}
			/>
		</Grid>
	);
};
