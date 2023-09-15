import { useEffect, useState } from "react";
import { MessageContainer } from "./styles";
import { ProfileImage } from "@/components/ProfileImage/ProfileImage";

export const MessageItem = ({ userId, message, image }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userTemp = JSON.parse(sessionStorage.getItem("user"));
    setUser(userTemp);
  }, []);
  return (
    <MessageContainer
      className={userId === user.userId ? "own-message" : "message"}
    >
      <ProfileImage image={image} name={user.name} />
      <p>{message}</p>
    </MessageContainer>
  );
};
