import styled from "styled-components";
import COLOR from "../../../variables/color";
import FONTFAMILY from "../../../variables/font_family";
import TEXT from "../../../variables/texts";
import { Checkbox } from "../../Atoms/Checkbox";
import { EditButton } from "../../Atoms/EditButton";
import React, { useState } from "react";
import { Input } from "../../Atoms/Input";

export const Task = ({
  onTaskNameChange,
  onTaskComplete,
  taskName,
  defaultIsEditing,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);
  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskNameChange(value);
  };
  const onEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      {isEditing ? (
        <StyledTask>
          <StyledContent>
            <Checkbox onClick={onTaskComplete} />
            <StyledText>{taskName}</StyledText>
          </StyledContent>
          <EditButton onClick={onEditButtonClick} />
        </StyledTask>
      ) : (
        <StyledWrapper>
          <Checkbox />
          <Input onEditComplete={onEditComplete} defaultValue={taskName} />
        </StyledWrapper>
      )}
    </>
  );
};

const StyledTask = styled.div`
  display: flex;
  width: 100%;
  padding: 2px 6px;
  justify-content: space-between;
`;
const StyledContent = styled.div`
  gap: 10px;
  display: flex;
`;
const StyledText = styled.p`
  color: ${COLOR.LIGHT_GRAY};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.S};
  margin: 0;
`;
const StyledWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 2px 6px;
`;
