import Chat from "@/components/Chat/Chat";
import axios from "axios";
import { useEffect } from "react";

export default function App({ userList, messages }) {
  useEffect(() => {
    const currentUser = {
      userId: 1,
      name: "Asael Barajas",
      lastMessage: "holi",
    };

    sessionStorage.setItem("user", JSON.stringify(currentUser));
  }, []);

  return (
    <div className="main-container">
      <div className="chat-container">
        <Chat userList={userList} messages={messages} />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await axios.get(`${process.env.READ_USERS_ENDPOINT}`);
  const messagesResponse = await axios.get(
    `${process.env.READ_MESSAGES_ENDPOINT}`
  );
  const userList = response.data;
  const messages = messagesResponse.data;

  return { props: { userList, messages } };
};
