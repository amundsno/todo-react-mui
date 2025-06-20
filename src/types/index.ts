import type { Theme } from "@mui/material";

export type Todo = {
  id: string;
  title: string;
  done: boolean;
  priority: Priority;
};

export type Priority = typeof priorities[number];

const priorities = ["normal", "medium", "urgent"] as const;

export function nextPriority(priority: Priority): Priority{
    const index = priorities.indexOf(priority)
    return priorities[(index + 1) % priorities.length]
}

export const colorByPriority: Record<Priority, keyof Theme['palette']> = {
  normal: "success",
  medium: "secondary",
  urgent: "warning",
};