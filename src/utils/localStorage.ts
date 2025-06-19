export function getFromLocalStorage<T>(key: string, defaultValue: T): T {
  const raw = localStorage.getItem(key);
  if (!raw) return defaultValue;
  return JSON.parse(raw);
}

export function setToLocalStorage<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}
