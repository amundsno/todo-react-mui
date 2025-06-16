/* eslint-disable react-refresh/only-export-components */
// Reason: For simplicity, this file exports both provider component and context logic.

import { createContext, useContext, useState } from "react";
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

export const useTodos = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context)
    throw new Error(
      "The 'useTodos()' hook must be called within a TodoProvider"
    );
  return context;
};

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: Guid.create(),
        title: title,
        done: false,
      },
    ]);
  };

  const toggleTodo = (id: Guid) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodo = (id: Guid) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext value={{ todos, addTodo, toggleTodo, removeTodo }}>
      {children}
    </TodoContext>
  );
};
