import { Grid, InputBase } from '@material-ui/core';
import { chatForm } from './chatInput_styles';

interface IProps {
	handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void,
	onChange: { (e: React.ChangeEvent<any>): void },
	value: string,
	disabled?: boolean
}

export const ChatInput: React.FC<IProps> = ({ handleSubmit, ...props}) => {
	const classes = chatForm()
	return (
		<Grid component='form' onSubmit={handleSubmit} className={classes.root}>
			<InputBase inputProps={{...props}}
				className={classes.input}
				type='text'
				autoFocus={true}
				placeholder='write a message'
				name='message'
				id='message'
			/>
		</Grid>
	);
};




