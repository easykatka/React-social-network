import { Grid } from '@material-ui/core';
import { useEffect } from 'react';
import { ChatMessages } from '../../components/ChatMessages/ChatMessages';
import { ChatNavBar } from '../../components/ChatNavBar/ChatNavBar';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PrivateMessages } from '../../components/PrivateMessages/PrivateMessages';
import { PrivateUserInfo } from '../../components/PrivateUserInfo/PrivateUserInfo';
import { ChatUsersList } from '../../components/ChatUsersList/ChatUsersList';
import { startMessagesListening, stopMessagesListening } from '../../app/reducers/chat-reducer';
import { RootState } from '../../app/store';
import { useAppDispatch } from '../../app/store';

const MessengerPage: React.FC = ({ match }: any) => {
	const { dialogs } = useSelector((state: RootState) => state.dialogs);
	const routerId = match.params.userId;
	const recipient = dialogs.filter((item) => item.id == routerId)[0]
	const { status } = useSelector((state: RootState) => state.chat);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(startMessagesListening());
		return () => {
			dispatch(stopMessagesListening());
		};
	}, []);

	return (
		<Grid container direction='row' justify='center'>
			<Grid item xs={2}>
				<ChatNavBar />
			</Grid>
			<Grid item xs={10}>
				<Grid container >
					{routerId ? (
						<>
							<PrivateMessages routerId={routerId} recipient={recipient} />
							<PrivateUserInfo routerId={routerId} recipient={recipient} />
						</>
					) : (
							<>
								{status === 'error' && <div>Some error occured. Please refresh the page</div>}
								<ChatMessages />
								<ChatUsersList />
							</>
						)}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default withRouter(MessengerPage);
