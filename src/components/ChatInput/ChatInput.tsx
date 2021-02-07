import { Grid, InputBase, IconButton } from '@material-ui/core';
import { chatForm } from './chatInput_styles';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
interface IProps {
	disabled?: boolean,
	[x:string]:any,
}

export const ChatInput: React.FC<IProps> = ({ handleSubmit, ...props }) => {
	const classes = chatForm()
	return (
		<Grid component='form' onSubmit={handleSubmit} className={classes.root}>
			<InputBase inputProps={{ ...props }}
				className={classes.input}
				type='text'
				autoFocus={true}
				placeholder='write a message'
				name='message'
				id='message'
				endAdornment={
					<IconButton type='submit'>
						<SendRoundedIcon color='inherit' className={classes.sendIcon} />
					</IconButton>
				}
			/>
		</Grid>
	);
};




