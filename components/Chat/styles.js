import { Color } from "@/styles/utils";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;

  .chat-list,
  .chat-box {
    height: 100%;
  }

  .chat-list {
    width: 300px;
  }

  .chat-box {
    flex: 1;
    border-left: 1px solid ${Color.mainYellor};
    display: flex;
    flex-direction: column;

    main {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  }
`;
