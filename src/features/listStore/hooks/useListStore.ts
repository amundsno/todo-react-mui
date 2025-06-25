import { Guid } from "guid-typescript";
import { useListStoreBase } from "../context/ListStoreContext";

const LIST_STORAGE_KEY_PREFIX = "todos-";

export function useListStore() {
  const { items: lists, addItem, removeItem, updateField } = useListStoreBase();

  const getListStorageKey = (id: string): string | undefined => {
    if (lists.some((list) => list.id === id))
      return `${LIST_STORAGE_KEY_PREFIX}${id}`;
    return undefined;
  };

  const newList = (listName?: string) => {
    const newList = {
      id: Guid.create().toString(),
      listName: listName ? listName : `List ${lists.length + 1}`,
    };

    addItem(newList);
    return newList;
  };

  const removeList = (id: string) => {
    const storageKey = getListStorageKey(id);
    if (storageKey) localStorage.removeItem(storageKey);
    removeItem(id);
  };

  const setListName = (id: string, listName: string) => {
    updateField(id, "listName", listName);
  };

  return {
    lists,
    newList,
    removeList,
    setListName,
    getListStorageKey,
  };
}
