import { Container } from "./styles";
import { SearchInput } from "../SearchInput/SearchInput";
import { UserInfo } from "./UserInfo/UserInfo";
import { ContactList } from "./ContactList/ContactList";
import { useEffect, useState } from "react";
import { MessageBox } from "./MessageBox/MessageBox";
import { MessageInput } from "./MessageInput";
import chatBackground from "@/assets/images/chat-background.jpg";
import Image from "next/image";

const Chat = ({ userList = [], messages = [], ws = {} }) => {
  const [userSelected, setUserSelected] = useState({});
  const [user, setUser] = useState({});
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    const userTemp = JSON.parse(sessionStorage.getItem("user"));
    const userListFiltered = userList.filter(
      (usr) => usr.userId !== userTemp?.userId
    );
    if (userList) setUserSelected(userListFiltered[0]);
    setUser(userTemp);
  }, []);

  useEffect(() => {
    if (userSelected) {
      const msns = messages?.filter((msn) =>
        [msn.to, msn.sentBy].includes(userSelected.userId)
      );
      setMessageList(msns);
    }
  }, [userSelected, messages]);
  return (
    <Container>
      <div className="chat-list">
        <UserInfo user={user} />
        <SearchInput />
        <ContactList
          userList={userList}
          setUserSelected={setUserSelected}
          user={user}
        />
      </div>
      <div className="chat-box">
        <header>
          <UserInfo user={userSelected} />
        </header>
        <main>
          <Image
            src={chatBackground}
            layout="fill"
            alt="chat-background-image"
          />
          <MessageBox messages={messageList} />
          {userSelected && <MessageInput ws={ws} userSelected={userSelected} />}
        </main>
      </div>
    </Container>
  );
};

export default Chat;
