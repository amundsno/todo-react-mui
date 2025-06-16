import {
  ListItem,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import type { Todo } from "../types";
import { useTodos } from "../context/TodoContext";

type Props = {
  todo: Todo;
};

export default function TodoItem({ todo }: Props) {
  const { toggleTodo, removeTodo } = useTodos();
  return (
    <ListItem
      sx={{
        color: todo.done ? "gray" : "inherit",
        opacity: todo.done ? 0.6 : 1,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <FormControlLabel
        control={
          <Checkbox checked={todo.done} onChange={() => toggleTodo(todo.id)} />
        }
        label={todo.title}
        name={`todo-item-${todo.id}`}
      />
      <IconButton onClick={() => removeTodo(todo.id)}>
        <DeleteForeverIcon />
      </IconButton>
    </ListItem>
  );
}
