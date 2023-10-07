import Chat from "@/components/Chat/Chat";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ChatApp() {
  const ws = new WebSocket("ws://localhost:8080 ");
  const [user, setUser] = useState({});
  const [userList, setUserList] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    ws.onopen = (evt) => {
      const usr = JSON.parse(sessionStorage.getItem("user"));
      setUser(usr);
      const object = { type: "addUser", user: usr };
      ws.send(JSON.stringify(object));
      console.log("conectado");
    };
  }, []);

  ws.onmessage = (message) => {
    // Parse the received message back to an object
    const receivedObject = JSON.parse(message.data || "{}");
    const { user, users, messages } = receivedObject;
    sessionStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    setMessages(messages);
    const usersArray = Object.values(users);
    setUserList(usersArray);
  };

  ws.onclose = () => {
    console.log("connection closed");
    ws.close();
  };

  return <Chat userList={userList} messages={messages} ws={ws} />;
}
