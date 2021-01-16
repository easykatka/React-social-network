import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers, setCurrentPage, setFilter, setPageSize } from '../../../app/reducers/users-reducer';
import TablePagination from '@material-ui/core/TablePagination';
import { useDebounce } from '../../../hooks/useDebounce';

//TODO последовательные фетчи
export const UsersFilter = ({ currentPage, pageSize, totalUsersCount, filter }) => {
	console.log('render userFilter');
	const dispatch = useDispatch();
	const debouncedSearchTerm = useDebounce(filter.searchTerm, 1000);
	// получения списка пользователей и обновление его при изменении параметров
	useEffect(() => {
		dispatch(getUsers(currentPage, pageSize, debouncedSearchTerm, filter.friend));
	}, [currentPage, pageSize, debouncedSearchTerm, filter.friend]);
	const handleChangePage = (event, newPage) => {
		dispatch(setCurrentPage(newPage));
	};
	const handleChangeSearchTerm = (event) => {
		dispatch(setFilter({ searchTerm: event.target.value }));
	};
	const handleChangeRowsPerPage = (event) => {
		dispatch(setPageSize(parseInt(event.target.value, 10)));
	};
	const handleFriendFilter = (e) => {
		dispatch(setFilter({ friend: e.target.value }));
	};

	return (
		<Grid container direction='column' alignItems='center'>
			<Typography variant='h5'>Users </Typography>
			<TextField label='Search people' onChange={handleChangeSearchTerm} id='searchTerm' name='searchTerm' value={filter.searchTerm} />
			<FormControl onChange={handleFriendFilter} component='fieldset'>
				<RadioGroup row aria-label='position' name='position' defaultValue='top'>
					<FormControlLabel value='null' control={<Radio size='small' color='primary' />} label='All' />
					<FormControlLabel value='true' control={<Radio size='small' color='primary' />} label='Friends' />
					<FormControlLabel value='false' control={<Radio size='small' color='primary' />} label='Without friend' />
				</RadioGroup>
			</FormControl>
			<TablePagination
				component='div'
				count={totalUsersCount}
				page={currentPage}
				onChangePage={handleChangePage}
				rowsPerPage={pageSize}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Grid>
	);
};
