import { createContext } from "react";
import { Guid } from "guid-typescript";

import type { Todo } from "../types";

export type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: string) => void;
  toggleTodo: (id: Guid) => void;
  removeTodo: (id: Guid) => void;
};

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);
