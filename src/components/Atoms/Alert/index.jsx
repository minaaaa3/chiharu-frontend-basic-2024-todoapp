import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

export const Alert = ({ isVisible, message = "text" }) => {
  return <AlertBox isVisible={isVisible}>{message}</AlertBox>;
};

const AlertBox = styled.div`
  color: ${COLOR.WHITE};
  width: 400px;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: ${COLOR.RED};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.S};
`;
