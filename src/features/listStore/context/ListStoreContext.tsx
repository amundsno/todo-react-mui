// Reason: For simplicity, this file exports both provider component and context logic.
/* eslint-disable react-refresh/only-export-components */

import { createGenericListContext } from "@/context/GenericListContext";
import type { ReactNode } from "react";
import { type ListStoreItem } from "../types/listStoreTypes";

export const {
  Provider: ListStoreProviderBase,
  useGenericList: useListStoreBase,
} = createGenericListContext<ListStoreItem>();

const STORAGE_KEY = "list-store";

export function ListStoreProvider({ children }: { children: ReactNode }) {
  return (
    <ListStoreProviderBase localStorageKey={STORAGE_KEY}>
      {children}
    </ListStoreProviderBase>
  );
}
