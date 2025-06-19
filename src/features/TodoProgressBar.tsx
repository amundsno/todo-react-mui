import { type LinearProgressProps } from "@mui/material";
import { useTodos } from "../context/TodoContext";
import { colorByPriority, type Priority, type Todo } from "../types";
import OverlappingLinearProgress, {
  type Bar,
} from "../components/OverlappingLinearProgress";
import TodoTooltip from "./TodoTooltip";

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
      tooltip={<TodoTooltip />}
    />
  );
}
