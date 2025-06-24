/* eslint-disable react-refresh/only-export-components */
// Reason: For simplicity, this file exports both provider component and context logic.
import { createGenericListContext } from "@/context/GenericListContext";
import { type Todo } from "../types/todoTypes";
import type { ReactNode } from "react";
import { FilterProvider } from "./FilterContext";

export const { Provider: TodoProviderBase, useGenericList: useTodosBase } =
  createGenericListContext<Todo>();

const STORAGE_KEY = "todos";

export function TodoProvider({ children }: { children: ReactNode }) {
  return (
    <TodoProviderBase localStorageKey={STORAGE_KEY}>
      <FilterProvider>{children}</FilterProvider>
    </TodoProviderBase>
  );
}
