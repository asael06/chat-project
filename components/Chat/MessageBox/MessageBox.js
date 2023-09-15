import { Container } from "./styles";
import chatBackground from "@/assets/images/chat-background.jpg";
import Image from "next/image";
import { MessageItem } from "./MessageItem";

export const MessageBox = ({ messages = [] }) => {
  return (
    <Container>
      <Image src={chatBackground} layout="fill" alt="chat-background-image" />
      <div className="messages-list">
        {messages.map(({ message, sentBy }, i) => (
          <MessageItem key={i} message={message} userId={sentBy} />
        ))}
      </div>
    </Container>
  );
};
