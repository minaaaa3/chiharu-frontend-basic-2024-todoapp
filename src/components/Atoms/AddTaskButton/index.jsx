import React from "react";
import plus from "../../../assets/svg/plus.svg";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";

export const AddTaskButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledImage src={plus} />
      <StyledText>タスクを追加</StyledText>
    </StyledButton>
  );
};
const StyledButton = styled.button`
  color: ${COLOR.GREEN};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.S};
  font-weight: 500;
  display: flex;
  &:hover {
    background-color: ${COLOR.GREEN_TRANSLUCENT};
  }
  border-radius: 12px;
  border: none;
  background-color: transparent;
  gap: 10px;
  padding: 2px 6px;
`;
const StyledText = styled.p`
  margin: 0;
`;
const StyledImage = styled.img`
  width: 20px;
  height: 20px;
`;
