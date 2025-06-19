import { useState, useEffect } from "react";

import { getFromLocalStorage, setToLocalStorage } from "../utils/localStorage";

const STORAGE_KEY = "hideCompleted";

export default function useTodoFilter() {
  const [hideCompleted, setHideCompleted] = useState(
    getFromLocalStorage(STORAGE_KEY, false)
  );

  useEffect(() => {
    setToLocalStorage(STORAGE_KEY, hideCompleted);
  }, [hideCompleted]);

  const toggleHideCompleted = () => {
    setHideCompleted((prev) => !prev);
  };

  return {
    hideCompleted,
    toggleHideCompleted,
  };
}
