/* eslint-disable react-refresh/only-export-components */
// Reason: For simplicity, this file exports both provider component and context logic.
import { createGenericListContext } from "@/context/GenericListContext";
import { type Todo } from "../types/todoTypes";
import type { ReactNode } from "react";
import { FilterProvider } from "./FilterContext";
import { useListStore } from "@/features/listStore";
import { useParams } from "react-router";

export const { Provider: TodoProviderBase, useGenericList: useTodosBase } =
  createGenericListContext<Todo>();

export function TodoProvider({ children }: { children: ReactNode }) {
  const { getListStorageKey } = useListStore();
  const { listId } = useParams();
  const storageKey = listId ? getListStorageKey(listId) : undefined;

  return (
    <TodoProviderBase key={storageKey} localStorageKey={storageKey}>
      <FilterProvider>{children}</FilterProvider>
    </TodoProviderBase>
  );
}
