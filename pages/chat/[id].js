import axios from "axios";
import { Container } from "./styles";

const ChatBox = ({ messages = [] }) => {
  return (
    <Container>
      {messages?.map((msn) => (
        <span>{msn?.message}</span>
      ))}
    </Container>
  );
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await axios.get(
    `${process.env.READ_MESSAGES_ENDPOINT}/${id}`
  );
  const { messages } = response.data;

  return { props: { messages } };
};

export const getStaticPaths = async () => {
  const response = await axios.get(`${process.env.READ_MESSAGES_ENDPOINT}`);
  const paths = response.data.map((item) => {
    return { params: { id: item.id + "" } };
  });
  return { paths, fallback: true };
};

export default ChatBox;
