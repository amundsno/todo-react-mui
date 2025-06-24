import { type LinearProgressProps } from "@mui/material";
import OverlappingLinearProgress, { type Bar } from "@/components/OverlappingLinearProgress";
import { useTodos } from "../hooks/useTodos";
import TodoProgressBarTooltip from "./TodoProgressBarTooltip";
import { type Todo, type Priority, colorByPriority } from "../types/todoTypes";


const getBar = (todos: Todo[], priority: Priority): Bar => {
  const completed = todos.filter((x) => x.done && x.priority === priority);
  return {
    color: colorByPriority[priority] as LinearProgressProps["color"],
    ratio: todos.length === 0 ? 0 : completed.length / todos.length,
  };
};

export default function TodoProgressBar() {
  const { todos } = useTodos();

  if (todos.length === 0) return;

  return (
    <OverlappingLinearProgress
      bars={[
        getBar(todos, "urgent"),
        getBar(todos, "medium"),
        getBar(todos, "normal"),
      ]}
      tooltip={<TodoProgressBarTooltip />}
    />
  );
}
