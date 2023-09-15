import { Color, Fonts } from "@/styles/utils";
import styled from "styled-components";

export const Container = styled.li`
  list-style: none;

  padding: 15px;
  padding-left: 30px;
  display: flex;
  cursor: pointer;
  text-decoration: none;

  .contact-info {
    color: ${Color.fontColor};
    font-family: ${Fonts.dosisVariable};

    h2 {
      font-size: 18px;
      line-height: 20px;

      & + * {
        margin-top: 5px;
      }
    }

    p {
      font-size: 15px;
      line-height: 15px;
    }
  }

  & > * + * {
    margin-left: 20px;
  }

  &.has-hover {
    &:hover {
      background-color: hsla(0, 100%, 0%, 0.5);
    }
  }
`;
