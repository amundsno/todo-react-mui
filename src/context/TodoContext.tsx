/* eslint-disable react-refresh/only-export-components */
// Reason: For simplicity, this file exports both provider component and context logic.

import { createContext, useContext, useEffect, useState } from "react";
import { Guid } from "guid-typescript";

import { nextPriority, type Todo } from "../types";
import { getFromLocalStorage, setToLocalStorage } from "../utils/localStorage";

export type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: string) => void;
  toggleDone: (id: string) => void;
  removeTodo: (id: string) => void;
  togglePriority: (id: string) => void;
  hideCompleted: boolean;
  toggleHideCompleted: () => void;
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

const STORAGE_KEY = "todos";
const HIDE_STORAGE_KEY = "hideCompleted";

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>(
    getFromLocalStorage(STORAGE_KEY, [])
  );

  const addTodo = (title: string) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Guid.create().toString(),
        title: title,
        done: false,
        priority: "normal",
      },
    ]);
  };

  useEffect(() => {
    setToLocalStorage(STORAGE_KEY, todos);
  }, [todos]);

  const toggleDone = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const togglePriority = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, priority: nextPriority(todo.priority) }
          : todo
      )
    );
  };

  const [hideCompleted, setHideCompleted] = useState(
    getFromLocalStorage(HIDE_STORAGE_KEY, false)
  );

  const toggleHideCompleted = () => {
    setHideCompleted((prev) => !prev);
  };

  useEffect(() => {
    setToLocalStorage(HIDE_STORAGE_KEY, hideCompleted);
  }, [hideCompleted]);

  return (
    <TodoContext
      value={{
        todos,
        addTodo,
        toggleDone,
        removeTodo,
        togglePriority,
        hideCompleted,
        toggleHideCompleted,
      }}
    >
      {children}
    </TodoContext>
  );
};
