import { useEffect, useState } from "react";
import { UserInfo } from "../UserInfo/UserInfo";
import { Container } from "./styles";

export const ContactList = ({ userList = [], user = {}, setUserSelected }) => {
  return (
    <Container>
      {userList?.map(
        (usr) =>
          usr.userId !== user?.userId && (
            <UserInfo
              key={usr.userId}
              user={usr}
              hasHover={true}
              setUserSelected={setUserSelected}
            />
          )
      )}
    </Container>
  );
};
