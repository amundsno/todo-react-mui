/* eslint-disable react-refresh/only-export-components */
// Reason: For simplicity, this file exports both provider component and context logic.

import { createContext, useContext } from "react";

import useTodoState from "./_useTodoState";
import useTodoFilter from "./_useTodoFilter";

export type TodoContextType = ReturnType<typeof useTodoState> &
  ReturnType<typeof useTodoFilter>;

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
  const todoState = useTodoState();
  const todoFilter = useTodoFilter();

  const value = {
    ...todoState,
    ...todoFilter,
  };

  return <TodoContext value={value}>{children}</TodoContext>;
};
