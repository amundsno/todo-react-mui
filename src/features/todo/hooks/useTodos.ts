import { Guid } from "guid-typescript";
import { useTodosBase } from "../context/TodoContext";
import { nextPriority } from "../types/todoTypes";
import { useTodoFilter } from "../context/FilterContext";

export function useTodos() {
  const { items: todos, addItem, removeItem, updateField } = useTodosBase();

  const addTodo = (title: string) => {
    addItem({
      id: Guid.create().toString(),
      title: title,
      done: false,
      priority: "low",
    });
  };

  const toggleDone = (id: string) => {
    updateField(id, "done", (prev) => !prev);
  };

  const removeTodo = (id: string) => {
    removeItem(id);
  };

  const togglePriority = (id: string) => {
    updateField(id, "priority", (prev) => nextPriority(prev));
  };

  const setTitle = (id: string, title: string) => {
    updateField(id, "title", title);
  };

  const filters = useTodoFilter();

  return {
    todos,
    addTodo,
    toggleDone,
    removeTodo,
    togglePriority,
    setTitle,
    ...filters,
  };
}
