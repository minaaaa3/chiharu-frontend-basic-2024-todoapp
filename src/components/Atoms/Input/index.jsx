import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/texts";
import TEXT from "../../../variables/texts";
import { useRef, useEffect } from "react";
export const Input = ({ onEditComplete, defaultValue }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleBlur = () => {
    onEditComplete(inputRef.current.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (inputRef.current) {
        onEditComplete(inputRef.current.value);
      }
    }
  };
  return (
    <StyledInput
      ref={inputRef}
      type="text"
      defaultValue={defaultValue}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
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
