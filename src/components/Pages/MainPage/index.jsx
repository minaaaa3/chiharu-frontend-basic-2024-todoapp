import React from "react";
import { TodoCard } from "../../Organisms/TodoCard";
import { Title } from "../../Atoms/Title";
import styled from "styled-components";

export const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <TodoCard />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;
