import { Grid,  InputBase } from '@material-ui/core';
import { useFormik } from 'formik';
import { sendMessage } from '../../../../app/reducers/dialogs-reducer';
import { privateForm } from './privateForm_styles ';
import { useAppDispatch } from './../../../../app/store';

type PropsType = {
	routerId: number
}
//* РАБОЧИЙ КОМПОНЕНТ
export const PrivateForm: React.FC<PropsType> = ({ routerId }) => {
	const dispatch = useAppDispatch();
	const classes = privateForm();
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
			/>
		</Grid>
	);
};
