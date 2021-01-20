import { Avatar, Grid, makeStyles } from '@material-ui/core';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { PrivateForm } from './privateForm';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import DoneAllRoundedIcon from '@material-ui/icons/DoneAllRounded';
import { getMessages } from '../../../app/reducers/dialogs-reducer';
import { dateHelper } from '../../../common/dateHelper';
import { Preloader } from '../../../common/preloader';

const useStyles = makeStyles((theme) => ({
	privateChat__container: {
		backgroundColor: '#36393f',
		padding: 15,
		height: 600,
		position: 'relative',
	},
	privateChat__messageBody: {
		color: '#dcddde',
		wordBreak: 'break-all',
	},
	privateChat__doneIcon: {
		color: 'orange',
		fontSize: 12,
	},
	privateChat__doneAllIcon: {
		color: 'green',
		fontSize: 12,
	},
	privateChat__addedAt: {
		fontSize: 10,
		color: 'grey',
	},
	privateChat__senderName: {
		color: '#fff',
		fontWeight: 700,
	},
	privateChat__messageContent: {
		display: 'flex',
		padding: '14px 0',
		borderTop: '1px solid #40444b',
	},
	privateChat__messageContainer: {
		overflowY: 'auto',
		height: 500,
		padding: 8,
	},
}));
export const PrivateMessages = ({ routerId, recipient }) => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const { messages, dialogsFetching } = useSelector((state) => state.dialogs);
	const { AuthUser } = useSelector((state) => state.profile);
	const messagesEndRef = useRef();
	//скролл вниз
	const scrollToBottom = () => {
		messagesEndRef.current && messagesEndRef.current.scrollIntoView(false);
	};
	useEffect(() => dispatch(getMessages(routerId)), [routerId]);
	useEffect(() => scrollToBottom(), [messages]);

	//* РАБОЧИЙ КОМПОНЕНТ
	return (
		<Grid item xs className={classes.privateChat__container}>
			{dialogsFetching ? (
				<Preloader />
			) : (
				<>
					<Grid className={classes.privateChat__messageContainer}>
						{messages.items?.map((item, idx) => (
							<Grid item className={classes.privateChat__messageContent} key={idx}>
								<Grid item>
									<Avatar
										alt='avatar'
										src={item.senderId === AuthUser?.userId ? AuthUser?.photos?.large : recipient?.photos?.large}
									/>
								</Grid>
								<Grid item style={{ marginLeft: 10 }}>
									<span className={classes.privateChat__senderName}>{item.senderName}</span>
									<Grid className={classes.privateChat__messageBody}>
										<Grid container direction='row' spacing={2} alignItems='center'>
											<Grid item>{item.body}</Grid>
											<Grid item>
												<span>
													{item.senderId === AuthUser?.userId &&
														(item.viewed ? (
															<DoneAllRoundedIcon className={classes.privateChat__doneAllIcon} />
														) : (
															<DoneRoundedIcon className={classes.privateChat__doneIcon} />
														))}
												</span>
												<span className={classes.privateChat__addedAt}>{dateHelper(item.addedAt)}</span>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
								<div ref={messagesEndRef}></div>
							</Grid>
						))}
					</Grid>
					<Grid container>
						<PrivateForm routerId={routerId} />
					</Grid>
				</>
			)}
		</Grid>
	);
};
