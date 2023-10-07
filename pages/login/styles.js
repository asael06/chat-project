import { Color, Fonts } from "@/styles/utils";
import styled from "styled-components";

export const MainContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  font-family: ${Fonts.dosisVariable};
  color: ${Color.mainYellor};
  font-size: 25px;
  font-weight: 700;

  .login-container {
    background-color: ${Color.grayColor};
    border-radius: 15px;
    padding: 20px;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .input-container {
      width: 100%;
      input,
      span {
        display: block;
      }

      input {
        padding: 5px;
        padding-left: 10px;
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
        margin-top: 15px;
      }
    }

    button {
      width: 100px;
      border: none;
      padding: 10px;
      background-color: ${Color.mainYellor};
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
