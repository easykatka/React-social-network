import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { Grid, IconButton, InputBase, makeStyles } from '@material-ui/core';
import { useFormik } from 'formik';
import { sendMessage } from '../../../../app/reducers/dialogs-reducer';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	chatForm__container: {
		backgroundColor: '#40444b',
		alignItems: 'center',
		marginTop: 20,
		borderRadius: 7,
	},
	chatForm__input: {
		color: 'white',
		marginLeft: 15,
		width: 500,
	},
}));
//* РАБОЧИЙ КОМПОНЕНТ
export const PrivateForm = ({ routerId }) => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const { handleSubmit, handleChange, values, resetForm } = useFormik({
		initialValues: {
			message: '',
		},
		onSubmit: ({ message }) => {
			dispatch(sendMessage(routerId, message));
			resetForm();
		},
	});
	return (
		<Grid component='form' onSubmit={handleSubmit} className={classes.chatForm__container}>
			<InputBase
				className={classes.chatForm__input}
				type='text'
				autoFocus={true}
				placeholder='white a message'
				name='message'
				onChange={handleChange}
				value={values.message}
				id='message'
				endAdornment={
					<IconButton type='submit'>
						<SendRoundedIcon color='inherit' fontSize='small' />
					</IconButton>
				}
			/>
		</Grid>
	);
};
