import React from "react";
import { useState, useEffect } from "react";
import { AddTaskButton } from "../../Atoms/AddTaskButton";
import { Task } from "../../Molecules/Task";
import styled from "styled-components";
import COLOR from "../../../variables/color";

export const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);
  const STORAGE_KEY = "tasks";
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    try {
      const parsed = JSON.parse(stored);
      setTaskList(parsed);
    } catch (error) {
      console.error("タスクリストの読み込みに失敗しました:", error);
      setTaskList([]);
    }
  }, []);

  const onAddTaskButtonClick = () => {
    const newTask = {
      name: "",
      initializing: true,
    };

    setTaskList((prevList) => [...prevList, newTask]);
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const onTaskComplete = (index) => {
    setTaskList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const onTaskNameChange = (value, index) => {
    setTaskList((prevList) => {
      if (value === "") {
        // 1. タスク名が空だったら削除
        return prevList.filter((_, i) => i !== index);
      } else {
        // 2. タスク名が空でなければ更新
        const newList = [...prevList]; // 配列をコピー
        newList[index] = { ...newList[index], name: value }; // 該当タスクのnameを書き換え
        return newList;
      }
    });
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick}>タスク追加</AddTaskButton>
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onTaskComplete={() => onTaskComplete(index)}
            onTaskNameChange={(value) => onTaskNameChange(value, index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: ${COLOR.LIGHT_BLACK};
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  max-width: 500px;
  width: 100%;
  box-sizing: border-box;
`;
const StyledTaskList = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: column;
`;
