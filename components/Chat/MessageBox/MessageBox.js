import { Container } from "./styles";
import { MessageItem } from "./MessageItem";
import { useEffect, useRef } from "react";

export const MessageBox = ({ messages = [] }) => {
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages]);

  return (
    <Container ref={scrollRef}>
      <div className="messages-list">
        {messages.map(({ message, sentBy }, i) => (
          <MessageItem key={i} message={message} userId={sentBy} autoFocus />
        ))}
      </div>
    </Container>
  );
};
