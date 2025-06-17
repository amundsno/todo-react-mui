import {
  Box,
  LinearProgress,
  linearProgressClasses,
  type LinearProgressProps,
  type SxProps,
} from "@mui/material";
import { useTodos } from "../context/TodoContext";
import { colorByPriority, type Priority, type Todo } from "../types";

const overlappingProps: SxProps = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [`&.${linearProgressClasses.root}`]: {
    backgroundColor: "transparent",
  },
};

const computeProgress = (todos: Todo[], priority: Priority): number => {
  const completed = todos.filter((x) => x.done && x.priority === priority);
  return (100 * completed.length) / todos.length;
};

export default function TodoProgressBar() {
  const { todos } = useTodos();

  const progressByPriority: Record<Priority, number> = {
    'normal' : computeProgress(todos, 'normal'),
    'medium' : computeProgress(todos, 'medium'),
    'urgent' : computeProgress(todos, 'urgent'),
  }
  
  const cumulativeProgressByPriority: Record<Priority, number> = {
    'normal' : progressByPriority['normal'] + progressByPriority['medium'] + progressByPriority['urgent'],
    'medium' : progressByPriority['medium'] + progressByPriority['urgent'],
    'urgent' : progressByPriority['urgent'],
  }

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        mb: 1,
      }}
    >
      <LinearProgress variant="determinate" value={0} color="inherit" />
      <LinearProgress
        variant="determinate"
        sx={overlappingProps}
        color={colorByPriority["normal"] as LinearProgressProps["color"]}
        value={cumulativeProgressByPriority['normal']}
      />
      <LinearProgress
        variant="determinate"
        sx={overlappingProps}
        color={colorByPriority["medium"] as LinearProgressProps["color"]}
        value={cumulativeProgressByPriority['medium']}
      />
      <LinearProgress
        variant="determinate"
        sx={overlappingProps}
        color={colorByPriority["urgent"] as LinearProgressProps["color"]}
        value={cumulativeProgressByPriority['urgent']}
      />
    </Box>
  );
}
