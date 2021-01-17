const subcribers = {
    'messages-received': [] ,
    'status-changed': [] 
}
let ws = null

const closeHandler = () => {
    notifySubscribersAboutStatus('pending')
    setTimeout(createChannel, 3000)
}
const messageHandler = (e) => {
    const newMessages = JSON.parse(e.data)
    subcribers['messages-received'].forEach(s => s(newMessages))
}
const openHandler = () => {
    notifySubscribersAboutStatus('ready')
}
const errorHandler = () => {
    notifySubscribersAboutStatus('error')
    console.error('REFRESH PAGE')
}
const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}
const notifySubscribersAboutStatus = (status: StatusType) => {
    subcribers['status-changed'].forEach(s => s(status))
}

function createChannel() {
    cleanUp()
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
}


export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subcribers['messages-received'] = []
        subcribers['status-changed'] = []
        cleanUp()
        ws?.close()
    },
    subscribe(eventName, callback) {
        subcribers[eventName].push(callback)
        return () => {
            subcribers[eventName] = subcribers[eventName].filter(s => s !== callback)
        }
    },
    unsubscribe(eventName, callback) {
        subcribers[eventName] = subcribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message) {
        ws?.send(message)
    }
}

