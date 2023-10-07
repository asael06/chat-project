import { Color, Fonts } from "@/styles/utils";
import styled from "styled-components";

export const Container = styled.form`
  height: 60px;
  background-color: ${Color.grayColor};
  display: flex;
  align-items: center;
  padding: 10px 20px;

  .input-container {
    flex: 1;
    position: relative;

    input {
      padding: 5px;
      padding-left: 20px;
      background-color: ${Color.grayColor};
      border: none;
      outline-style: none;
      color: ${Color.fontColor};
      font-family: ${Fonts.dosisVariable};
      font-size: 18px;
      display: block;
      width: 100%;

      &:focus {
        & + span {
          width: 100%;
        }
      }
    }

    span {
      background-color: ${Color.mainYellor};
      transition: width ease-in-out 0.2s;
      height: 1px;
      width: 0;
      display: block;
    }

    & + * {
      margin-left: 10px;
    }
  }

  button {
    background-color: ${Color.grayColor};
    border: none;
    color: ${Color.mainYellor};
    cursor: pointer;
    i {
      font-size: 25px;
    }

    &:hover {
      opacity: 0.5;
    }
  }
`;
