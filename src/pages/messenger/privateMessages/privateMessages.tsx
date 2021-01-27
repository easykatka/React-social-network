import { Avatar, Grid, IconButton } from '@material-ui/core';
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import React from 'react';
import { PrivateForm } from './privateForm/privateForm';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';
import { deleteMessage, getMessages } from '../../../app/reducers/dialogs-reducer';
import { dateHelper } from '../../../common/dateHelper';
import { Preloader2 } from '../../../common/preloader2';
import { privateMessages } from './privateMessages_styles';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { dialogsArrayType } from '../../../common/types/types';
import { RootState } from '../../../app/store';
import { useAppDispatch } from './../../../app/store';


type PropsType = {
	routerId: number
	recipient: dialogsArrayType

}
export const PrivateMessages: React.FC<PropsType> = ({ routerId, recipient }) => {
	const dispatch = useAppDispatch();
	const classes = privateMessages();
	const { messagesFething, messages } = useSelector((state: RootState) => state.dialogs);
	const { authUser } = useSelector((state: RootState) => state.profile);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	//скролл вниз
	const scrollToBottom = () => {
		messagesEndRef.current && messagesEndRef.current.scrollIntoView(false);
	};
	useEffect(() => {
		dispatch(getMessages(routerId));
	}, [routerId, dispatch]);
	useEffect(() => scrollToBottom(), [messages]);

	return (
		<Grid item xs className={classes.privateMessages__container}>
			{messagesFething ? (
				<Preloader2 />
			) : (
					<>
						<Grid className={classes.privateMessages__messagesList}>
							{messages && messages.map((item: any, idx: any) => (
								<Grid
									item
									className={classes.privateMessages__messageContent}
									key={idx}
									onClick={() => dispatch(deleteMessage(item.id, routerId))}>
									<Avatar
										alt='avatar'
										className={classes.privateMessages__avatar}
										src={item.senderId === authUser?.userId ? authUser?.photos?.large : recipient?.photos?.large}
									/>
									<Grid container >
										<span className={classes.privateMessages__senderName}>{item.senderName}</span>
										<Grid className={classes.privateMessages__messageTitle}>
											<span>
												{item.senderId === authUser?.userId &&
													(item.viewed ? (
														<DoneAllRoundedIcon className={classes.privateMessages__doneAllIcon} />
													) : (
															<DoneRoundedIcon className={classes.privateMessages__doneIcon} />
														))}
											</span>
											<span className={classes.privateMessages__addedAt}>{dateHelper(item.addedAt)}</span>
											<DeleteOutlineOutlinedIcon className={classes.privateMessages__deleteIcon} color='secondary' />
										</Grid>
										<Grid container spacing={2} alignItems='center' className={classes.privateMessages__messageBody}>
											<Grid item>{item.body}</Grid>
										</Grid>
									</Grid>
								</Grid>
							))}
							<div ref={messagesEndRef}></div>
						</Grid>
						<Grid container>
							<PrivateForm routerId={routerId} />
						</Grid>
					</>
				)}
		</Grid>
	);
};
