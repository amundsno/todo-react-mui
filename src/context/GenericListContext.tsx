import { usePersistedState } from "@/hooks/usePersistedState";
import { createContext, useContext } from "react";

type WithId = { id: string | number };

type GenericListContextType<T extends WithId> = {
  items: T[];
  addItem: (item: T) => void;
  removeItem: (id: T["id"]) => void;
  updateItem: (id: T["id"], newItem: T | ((prevItem: T) => T)) => void;
  updateField: <K extends keyof T>(
    id: T["id"],
    field: K,
    value: T[K] | ((prevValue: T[K]) => T[K])
  ) => void;
};

type GenericListProviderType<T> = {
  children: React.ReactNode;
  localStorageKey?: string;
  initialItems?: T[];
};

export function createGenericListContext<T extends WithId>() {
  const Context = createContext<GenericListContextType<T> | undefined>(
    undefined
  );

  const Provider = ({
    children,
    localStorageKey,
    initialItems,
  }: GenericListProviderType<T>) => {
    const [items, setItems] = usePersistedState<T[]>(
      initialItems ?? [],
      localStorageKey
    );

    const addItem = (item: T) => setItems((prev) => [...prev, item]);

    const removeItem = (id: T["id"]) =>
      setItems((prev) => prev.filter((item) => item.id !== id));

    const updateItem = (id: T["id"], newItem: T | ((prevItem: T) => T)) =>
      setItems((prev) =>
        prev.map((item) => {
          if (item.id !== id) return item;
          return typeof newItem === "function" ? newItem(item) : newItem;
        })
      );

    const updateField = <K extends keyof T>(
      id: T["id"],
      field: K,
      value: T[K] | ((prevValue: T[K]) => T[K])
    ) =>
      setItems((prev) =>
        prev.map((item) => {
          if (item.id !== id) return item;
          const prevValue = item[field];
          const newValue =
            typeof value === "function"
              ? (value as (prev: T[K]) => T[K])(prevValue)
              : value;
          return { ...item, [field]: newValue };
        })
      );

    return (
      <Context
        value={{
          items,
          addItem,
          removeItem,
          updateItem,
          updateField,
        }}
      >
        {children}
      </Context>
    );
  };

  const useGenericList = () => {
    const context = useContext(Context);
    if (!context)
      throw new Error(
        "The 'useGenericList() hook must be called within a GenericListContextProvider"
      );
    return context;
  };

  return { Provider, useGenericList };
}
