import { type LinearProgressProps } from "@mui/material";
import { useTodos } from "../context/TodoContext";
import { colorByPriority, type Priority, type Todo } from "../types";
import OverlappingLinearProgress from "../components/OverlappingLinearProgress";

export default function TodoProgressBar() {
  const { todos } = useTodos();

  if (todos.length === 0) return

  const computeDoneRatio = (todos: Todo[], priority: Priority) => {
    if (todos.length === 0) return 0;
    const completed = todos.filter((x) => x.done && x.priority === priority);
    return completed.length / todos.length;
  };

  return (
    <OverlappingLinearProgress
      bars={[
        {
          color: colorByPriority["urgent"] as LinearProgressProps["color"],
          ratio: computeDoneRatio(todos, "urgent"),
        },
        {
          color: colorByPriority["medium"] as LinearProgressProps["color"],
          ratio: computeDoneRatio(todos, "medium"),
        },
        {
          color: colorByPriority["normal"] as LinearProgressProps["color"],
          ratio: computeDoneRatio(todos, "normal"),
        },
      ]}
    />
  );
}
