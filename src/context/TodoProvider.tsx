import { Guid } from "guid-typescript";
import { useState } from "react";

import type { Todo } from "../types";
import { TodoContext } from "./TodoContext";

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
