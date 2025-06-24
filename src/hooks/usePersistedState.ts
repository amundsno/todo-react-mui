import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

type PersistedState<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(
  defaultValue: T,
  keyName?: string
): PersistedState<T> {
  const [value, setValue] = useState<T>(() => {
    if (!keyName) return defaultValue;
    const value = localStorage.getItem(keyName);
    return value ? (JSON.parse(value) as T) : defaultValue;
  });

  useEffect(() => {
    if (keyName) localStorage.setItem(keyName, JSON.stringify(value));
  }, [keyName, value]);

  return [value, setValue];
}
