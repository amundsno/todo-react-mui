import { ListItem, Checkbox, IconButton, Stack } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import type { Todo } from "../types";
import { useTodos } from "../context/TodoContext";
import PriorityChip from "./PriorityChip";
import MinimalTextField from "../components/MinimalTextField";
import { useState } from "react";

type Props = {
  todo: Todo;
};

export default function TodoItem({ todo }: Props) {
  const { toggleDone, removeTodo, togglePriority } = useTodos();
  return (
    <ListItem
      sx={{
        color: todo.done ? "gray" : "inherit",
        opacity: todo.done ? 0.6 : 1,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Checkbox
        checked={todo.done}
        onChange={() => toggleDone(todo.id)}
        sx={{ ml: -1 }}
      />
      <TodoItemLabel todo={todo} />
      <Stack direction="row">
        <PriorityChip
          priority={todo.priority}
          onClick={() => togglePriority(todo.id)}
        />
        <IconButton onClick={() => removeTodo(todo.id)}>
          <DeleteForeverIcon />
        </IconButton>
      </Stack>
    </ListItem>
  );
}

function TodoItemLabel({ todo }: { todo: Todo }) {
  const { setTitle } = useTodos();
  const [value, setValue] = useState(todo.title);

  return (
    <MinimalTextField
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onSave={(newValue) => {
        if (newValue !== todo.title) setTitle(todo.id, newValue);
      }}
      onCancel={() => setValue(todo.title)}
      multiline={true}
      sx={{
        pr: 1,
        pl: 1,
        width: "100%",
      }}
    />
  );
}
