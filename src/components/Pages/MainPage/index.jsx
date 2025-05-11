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
  box-sizing: border-box;
  padding: 60px 20px 20px 20px;
  @media (max-width: 320px) {
    padding: 20px;
  }
`;
