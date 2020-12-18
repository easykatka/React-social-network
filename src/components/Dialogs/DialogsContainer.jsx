import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {actions} from "../../redux/DialogsPage-reducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
	return {
		dialogPage: state.dialogPage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		sendmsg: (newMessageBody) => dispatch(actions.sendMessageCreator(newMessageBody))
	}
}

export default compose(withAuthRedirect,
	connect(mapStateToProps, mapDispatchToProps)                // контейнерная
	)																						// хок
(Dialogs)                                                   // функциональная