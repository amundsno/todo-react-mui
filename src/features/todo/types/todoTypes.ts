import type { Theme } from "@mui/material";

export type Todo = {
  id: string;
  title: string;
  done: boolean;
  priority: Priority;
};

const priorities = ["low", "mid", "high"] as const;
export type Priority = typeof priorities[number];

export function nextPriority(priority: Priority): Priority{
    const index = priorities.indexOf(priority)
    return priorities[(index + 1) % priorities.length]
}

export const colorByPriority: Record<Priority, keyof Theme['palette']> = {
  low: "success",
  mid: "secondary",
  high: "warning",
};