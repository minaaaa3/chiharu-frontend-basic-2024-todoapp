import { Task } from "./index";

export default { component: Task };

export const Default = {
  args: {
    onTaskNameChange: (value) => console.log("Task name changed to:", value),
    onTaskComplete: () => console.log("Task completed"),
    taskName: "taskname",
    defaultIsEditing: false,
  },
};
