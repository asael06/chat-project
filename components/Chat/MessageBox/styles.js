import styled from "styled-components";
import chatBackground from "@/assets/images/chat-background.webp";
import { Color, Fonts } from "@/styles/utils";

export const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;

  img {
    position: absolute;
    object-fit: cover;
    z-index: -1;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: flex-start;

  p {
    border-radius: 10px;
    padding: 8px;
    font-family: ${Fonts.dosisVariable};
    font-weight: 600;
    display: inline-block;
    background-color: ${Color.fontColor};
    height: fit-content;
    max-width: 70%;
  }

  &.own-message {
    flex-direction: row-reverse;
    p {
      background-color: ${Color.mainYellor};
    }

    & > div {
      & + * {
        margin-left: 0;
        margin-right: 10px;
      }
    }
  }

  &.message + .message,
  &.own-message + .own-message {
    margin-top: 1px;
    & > div {
      visibility: hidden;
    }
  }

  & + * {
    margin-top: 10px;
  }

  & > div {
    & + * {
      margin-left: 10px;
    }
  }
`;
