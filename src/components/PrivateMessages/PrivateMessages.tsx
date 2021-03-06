import { Avatar, Grid } from '@material-ui/core';
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import React from 'react';
import { PrivateForm } from '../PrivateForm/PrivateForm';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';
import { deleteMessage, getMessages, setMessages } from '../../app/reducers/dialogs-reducer';
import { dateHelper } from '../../common/dateHelper';
import { privateMessages } from './privateMessages_styles';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { dialogsArrayType } from '../../common/types/types';
import { RootState } from '../../app/store';
import { useAppDispatch } from '../../app/store';
import { getNewMessagesCount } from '../../app/reducers/dialogs-reducer';
import { Preloader3 } from '../../common/preloader3'


type PropsType = {
	routerId: number
	recipient: dialogsArrayType

}
export const PrivateMessages: React.FC<PropsType> = ({ routerId, recipient }) => {
	const dispatch = useAppDispatch();
	const classes = privateMessages();
	const messages = useSelector((state: RootState) => state.dialogs.messages);
	const messagesFething = useSelector((state: RootState) => state.dialogs.messagesFething);
	const { authUser } = useSelector((state: RootState) => state.profile);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	//скролл вниз
	const scrollToBottom = () => {
		messagesEndRef.current && messagesEndRef.current.scrollIntoView(false);
	};
	useEffect(() => {
		dispatch(setMessages([]))
		dispatch(getMessages(routerId));

	}, [routerId]);

	useEffect(() => {
		dispatch(getNewMessagesCount())
		scrollToBottom()
	}, [messages]);

	return (
		<Grid item xs className={classes.root}>
			<Grid className={classes.messagesWrapper}>
				{messagesFething && !messages ? <Preloader3 /> :
					<>
						{messages?.map((item: any, idx: any) => (
							<Grid
								item
								className={classes.messageContent}
								key={idx}
							>
								<Avatar
									alt='avatar'
									className={classes.avatar}
									src={item.senderId === authUser?.userId ? authUser?.photos?.large : recipient?.photos?.large}
								/>
								<Grid container >
									<span className={classes.senderName}>{item.senderName}</span>
									<Grid className={classes.messageTitle}>
										<span>
											{item.senderId === authUser?.userId &&
												(item.viewed ? (
													<DoneAllRoundedIcon className={classes.doneAllIcon} />
												) : (
														<DoneRoundedIcon className={classes.doneIcon} />
													))}
										</span>
										<span className={classes.addedAt}>{dateHelper(item.addedAt)}</span>
										<DeleteOutlineOutlinedIcon onClick={() => dispatch(deleteMessage(item.id, routerId))} className={classes.deleteIcon} color='secondary' />
									</Grid>
									<Grid container spacing={2} alignItems='center' className={classes.messageBody}>
										<Grid item>{item.body}</Grid>
									</Grid>
								</Grid>
							</Grid>
						))}
					</>
				}

				<div ref={messagesEndRef}></div>
			</Grid>
			<Grid container>
				<PrivateForm routerId={routerId} />
			</Grid>
		</Grid>
	);
};
