
// local state
let initialState = {
    messages: [
        {id: 1, message: 'Hi', from: 'me'},
        {id: 2, message: 'How is your it-kamasutra?', from: 'friend'},
        {id: 3, message: 'Yo', from: 'me'},
        {id: 4, message: 'Yo', from: 'friend'},
        {id: 5, message: 'Yo', from: 'me'}] ,
    dialogs:
        [
            {id: 1, name: 'Detach', avatar: `http://avatarmaker.ru/img/11/1044/104363.jpg`},
            {id: 2, name: 'Andrew', avatar: `http://avatarmaker.ru/img/11/1044/104356.jpg`},
            {id: 3, name: "DSds", avatar: `http://avatarmaker.ru/img/11/1044/104346.gif`},
            {id: 4, name: 'Sasha', avatar: `http://avatarmaker.ru/img/11/1044/104351.gif`},
            {id: 5, name: 'SDSd', avatar: `http://avatarmaker.ru/img/11/1044/104329.gif`},
            {id: 6, name: 'Valera', avatar: `http://avatarmaker.ru/img/11/1044/104302.png`}] ,
}
// reducer
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEND_MESSAGE" :
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages,
                    {id: 10, message: body, from: 'me'}]
            };
        default:
            return state;
    }
}
//actions
export const actions = {
    sendMessageCreator : (newMessageBody) => ({type: "SEND_MESSAGE", newMessageBody} )
}

export default dialogsReducer