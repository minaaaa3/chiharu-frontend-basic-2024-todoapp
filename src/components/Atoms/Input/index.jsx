import React from "react";
import styled from "styled-components";
import { useState } from "react";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/texts";
import TEXT from "../../../variables/texts";
export const Input = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return <StyledInput type="text" value={text} onChange={handleChange} />;
};

const StyledInput = styled.input`
  width: 100%;
  padding: 0px 4px;
  background-color: ${COLOR.BLACK};
  border-radius: 2px;
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.S};
  border: none;
  outline: none;
`;
