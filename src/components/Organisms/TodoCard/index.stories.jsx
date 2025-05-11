import React from "react";
import { TodoCard } from "./index";
import { AlertHandlerProvider } from "../../../contexts/alert_handler";

export default { component: TodoCard };
export const Default = {
  args: {},
};

Default.decorators = [
  (Story) => (
    <div>
      <AlertHandlerProvider>
        <Story />
      </AlertHandlerProvider>
    </div>
  ),
];
