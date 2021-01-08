import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";


export const Chat = () => {
	
  return (<>
	<ChatMessages />
	<AddMessageForm />
	</>
  )
};
const ChatMessages = () => {
  
  const [messages, setMessages] = useState([]);
  const isAuth = useSelector((state) => state.auth.isAuth);
  useEffect(() => {
	const ws = new WebSocket(
		"wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
	  );
    ws.addEventListener("message", (e) => {
      const newMessages = JSON.parse(e.data);
      setMessages((prev) => [...prev, ...newMessages]);
    });
  }, []);

  console.log(messages);

  return (
    <div
      style={{
        height: "500px",
		overflowY:'auto'
		
      }}
    >
      {messages.map((i, index) => (
        <Message key={index} message={i} />
      ))}
    </div>
  );
};

const Message = ({ message }) => {
  return (
    <div>
      <img src={message.photo} style={{ width: "30px" }} />{" "}
      <b>{message.userName}</b>
      <br />
      {message.message}
      <hr />
    </div>
  );
};
const AddMessageForm = () => {
	const ws = new WebSocket(
		"wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"
	  );
	const [message, setMessage] = useState("");
  const SendMessage = () => {if (message) 
	  {ws.send(message)} setMessage('')
  }
  return (
    <>
      <div>
        <textarea name="message" onChange={(e) =>setMessage(e.currentTarget.value) } value={message} id="" cols="30" rows="1">
          d
        </textarea>{" "}
      </div>
      <div>
        <button onClick={SendMessage}>Send</button>
		
      </div>
    </>
  );
};
