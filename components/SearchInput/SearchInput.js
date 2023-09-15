import { useState } from "react";
import { Container } from "./styles";

export const SearchInput = ({ onSearch }) => {
  const [text, setTex] = useState("");
  const changeInput = (e) => {
    const { value } = e.target;
    setTex(value);
    onSearch && onSearch(value);
  };
  return (
    <Container>
      <div className="icon-box">
        <i className="material-icons">&#xe8b6;</i>
      </div>
      <input
        id={"search-input"}
        type="text"
        value={text}
        onChange={changeInput}
        placeholder="Buscar contacto"
      />
    </Container>
  );
};
