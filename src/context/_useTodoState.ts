import { Guid } from "guid-typescript";
import { useState, useEffect } from "react";

import { type Todo, nextPriority } from "../types";
import { getFromLocalStorage, setToLocalStorage } from "../utils/localStorage";

const STORAGE_KEY = "todos";

export default function useTodoState() {
  const [todos, setTodos] = useState<Todo[]>(
    getFromLocalStorage(STORAGE_KEY, [])
  );

  useEffect(() => {
    setToLocalStorage(STORAGE_KEY, todos);
  }, [todos]);

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

  const setTitle = (id: string, title: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title } : todo))
    );
  };

  return {
    todos,
    addTodo,
    toggleDone,
    removeTodo,
    togglePriority,
    setTitle,
  };
}
