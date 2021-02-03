
import { useFormik } from 'formik';
import { sendMessage } from '../../../../app/reducers/dialogs-reducer';
import { useAppDispatch } from './../../../../app/store';
import { ChatInput } from '../../../../components/ChatInput/ChatInput';

type PropsType = {
	routerId: number
}

export const PrivateForm: React.FC<PropsType> = ({ routerId }) => {
	const dispatch = useAppDispatch();
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
		<ChatInput handleSubmit={handleSubmit} handleChange={handleChange} message={values.message} />
	);
};
