import { Badge, Chip } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTodos } from "../hooks/useTodos";

export default function HideCompletedTodosChip() {
  const { todos, hideCompleted, toggleHideCompleted } = useTodos();
  if (todos.length > 0)
    return (
      <Badge
        badgeContent={
          hideCompleted ? todos.filter((todo) => todo.done).length : ""
        }
        color="success"
        invisible={!hideCompleted}
      >
        <Chip
          label={hideCompleted ? "Show completed" : "Hide completed"}
          variant="outlined"
          icon={hideCompleted ? <VisibilityIcon /> : <VisibilityOffIcon />}
          onClick={toggleHideCompleted}
          sx={{
            ["& svg"]: {
              height: "70%",
            },
          }}
        />
      </Badge>
    );
}
