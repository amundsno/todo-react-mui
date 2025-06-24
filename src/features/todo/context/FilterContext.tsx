/* eslint-disable react-refresh/only-export-components */
// Reason: For simplicity, this file exports both provider component and context logic.
import { createContext, useContext, type ReactNode } from "react";

import { usePersistedState } from "@/hooks/usePersistedState";

type FilterContextType = {
  hideCompleted: boolean;
  toggleHideCompleted: () => void;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

const STORAGE_KEY = "hideCompleted";

export function useTodoFilter() {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error(
      "The 'useTodoFilter()' hook must be used within a FilterProvider"
    );
  return context;
}

export function FilterProvider({ children }: { children: ReactNode }) {
  const [hideCompleted, setHideCompleted] = usePersistedState(
    false,
    STORAGE_KEY
  );

  const toggleHideCompleted = () => {
    setHideCompleted((prev) => !prev);
  };

  return (
    <FilterContext value={{ hideCompleted, toggleHideCompleted }}>
      {children}
    </FilterContext>
  );
}
