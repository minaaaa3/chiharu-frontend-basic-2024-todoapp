import React from "react";
import pencil from "../../../assets/svg/pencil.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";
export const EditButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledImage src={pencil} />
    </StyledButton>
  );
};
const StyledButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  position: relative;
  border-radius: 50%;
  height: 20px;
  &:hover {
    background-color: ${COLOR.LIGHT_GRAY_TRANSLUCENT};
  }
`;
const StyledImage = styled.img`
  width: 20px;
  height: 20px;
`;
