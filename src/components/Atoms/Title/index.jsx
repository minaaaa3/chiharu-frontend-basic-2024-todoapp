import React from "react";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";
import styled from "styled-components";
export const Title = () => {
  return <StyledTitle>SIMPLE TODO APP</StyledTitle>;
};
const StyledTitle = styled.p`
  font-family: ${FONTFAMILY.ROBOTO};
  ${TEXT.L};
  color: ${COLOR.WHITE};
  margin: 0;
  @media (max-width: ${BREAKPOINT.MEDIUM}) {
    ${TEXT.M};
  }
`;
