import styled from "styled-components";
import { Color } from "@/styles/utils";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

  .icon-box {
    width: 40px;
    height: 30px;
    background-color: ${Color.mainYellor};
    border-right: 1px solid ${Color.borderColor};
    color: black;
    font-size: 25px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #search-input {
    border: none;
    outline: none;
    flex: 1;
    padding: 5px;
    padding-left: 15px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
