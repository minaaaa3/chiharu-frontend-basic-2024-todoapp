import React from "react";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color";
import styled from "styled-components";

export const Checkbox = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledImage src={check} />
    </StyledButton>
  );
};
const StyledButton = styled.button`
  background-color: transparent;
  width: 20px;
  height: 20px;
  padding: 0;
  border-radius: 2px;
  border: 2px solid ${COLOR.LIGHT_GRAY};

  &:hover img {
    display: block;
  }
`;
const StyledImage = styled.img`
  width: 16px;
  height: 16px;
  display: none;
`;
