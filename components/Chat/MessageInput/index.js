import { useState } from "react";
import { Container } from "./styles";

export const MessageInput = ({ ws, userSelected }) => {
  const [message, setMessage] = useState("");
  const messageOnChange = (e) => {
    const msn = e.target.value;
    setMessage(msn);
  };

  const sendMessage = (e) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    e.preventDefault();
    const msn = {
      to: userSelected.userId,
      sentBy: user.userId,
      message,
      read: false,
      dateTime: new Date(),
    };
    const object = { type: "sendMessage", message: msn };
    ws.send(JSON.stringify(object));
    setMessage("");
  };

  return (
    <Container onSubmit={sendMessage}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Escribir mensaje..."
          value={message}
          onChange={messageOnChange}
        />
        <span></span>
      </div>
      <button>
        <i className="material-icons">&#xe163;</i>
      </button>
    </Container>
  );
};
