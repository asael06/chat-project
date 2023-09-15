import { Container } from "./styles";

export const ProfileImage = ({ image, name }) => {
  return (
    <Container>
      {image ? (
        <Image src={image} alt={`contact-${name}`} />
      ) : (
        <i className="material-icons">&#xE87C;</i>
      )}
    </Container>
  );
};
