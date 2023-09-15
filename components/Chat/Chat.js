import { Container } from "./styles";
import { SearchInput } from "../SearchInput/SearchInput";
import { UserInfo } from "./UserInfo/UserInfo";
import { ContactList } from "./ContactList/ContactList";
import { useEffect, useState } from "react";
import { MessageBox } from "./MessageBox/MessageBox";

const Chat = ({ userList = [], messages = [] }) => {
  const [userSelected, setUserSelected] = useState({});
  const [user, setUser] = useState({});
  const [messageList, setMessageList] = useState([]);
  useEffect(() => {
    const userTemp = JSON.parse(sessionStorage.getItem("user"));
    const userListFiltered = userList.filter(
      (usr) => usr.userId !== userTemp.userId
    );
    if (userList) setUserSelected(userListFiltered[0]);
    setUser(userTemp);
  }, []);

  useEffect(() => {
    if (userSelected) {
      const msns = messages[userSelected.userId];
      console.log(messages[userSelected.userId]);
      setMessageList(msns);
    }
  }, [userSelected]);
  return (
    <Container>
      <div className="chat-list">
        <SearchInput />
        <ContactList
          userList={userList}
          setUserSelected={setUserSelected}
          user={user}
        />
      </div>
      <div className="chat-box">
        <header>
          <UserInfo />
        </header>
        <main>
          <MessageBox messages={messageList} />
        </main>
      </div>
    </Container>
  );
};

export default Chat;
