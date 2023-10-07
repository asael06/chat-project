import { useEffect, useRef, useState } from "react";
import { MainContainer } from "./styles";
import { useRouter } from "next/router";

const Login = () => {
  const [text, setText] = useState("");
  const route = useRouter();
  const inputRef = useRef();

  const onChange = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const createUserId = () => {
    let n = Date.now().toString(36) + Math.random().toString(36).substr(2);

    return n;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const currentUser = {
      userId: createUserId(),
      name: text,
      lastMessage: "",
    };

    sessionStorage.setItem("user", JSON.stringify(currentUser));
    route.push("/chat");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <MainContainer onSubmit={onSubmit}>
      <div className="login-container">
        <div className="input-container">
          <input
            type="text"
            name="nick-name"
            id="nick-name"
            placeholder="Nombre de usuario..."
            value={text}
            onChange={onChange}
            required
            ref={inputRef}
          />
          <span></span>
        </div>
        <button className="login">Ingresar</button>
      </div>
    </MainContainer>
  );
};

export default Login;
