import { ProfileImage } from "../../ProfileImage/ProfileImage";
import { Container } from "./styles";

export const UserInfo = ({
  image,
  info = "testing status",
  hasHover = false,
  user = {},
  setUserSelected,
}) => {
  return (
    <Container
      className={hasHover ? "has-hover" : ""}
      onClick={() => setUserSelected && setUserSelected(user)}
    >
      <ProfileImage image={image} name={user.name} />
      <div className="contact-info">
        <h2 className="contact-name">{user.name}</h2>
        <p className="info-item">{info}</p>
      </div>
    </Container>
  );
};
