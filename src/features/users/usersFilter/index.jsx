import { FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers, setCurrentPage, setFilter, setPageSize } from '../../../app/reducers/users-reducer';
import TablePagination from '@material-ui/core/TablePagination';
import { useDebounce } from '../../../common/useDebounce';

//TODO последовательные фетчи
export const UsersFilter = ({ currentPage, pageSize, totalUsersCount, filter }) => {
	const dispatch = useDispatch();
	const debouncedSearchTerm = useDebounce(filter.searchTerm, 1000);
	// получения списка пользователей и обновление его при изменении параметров
	useEffect(() => {
		dispatch(getUsers(currentPage, pageSize, debouncedSearchTerm, filter.friend));
	}, [dispatch, currentPage, pageSize, debouncedSearchTerm, filter.friend]);
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

	const radioValues = [
		{ value: 'null', label: 'All' },
		{ value: 'true', label: 'Friends' },
		{ value: 'false', label: 'Without friend' },
	];

	return (
		<Grid container direction='column' alignItems='center' style={{padding:10}}>
			<TextField label='Search people' onChange={handleChangeSearchTerm} id='searchTerm' name='searchTerm' value={filter.searchTerm} />
			<FormControl onChange={handleFriendFilter} component='fieldset' >
				<RadioGroup row aria-label='position' name='position' value={filter.friend}>
					{radioValues.map((item) => {
						return (
							<FormControlLabel key={item.label}
								style={{ color: 'white' }}
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
				onChangePage={handleChangePage}
				rowsPerPage={pageSize}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</Grid>
	);
};
