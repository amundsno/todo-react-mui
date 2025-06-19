import {
  ListItem,
  Checkbox,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import type { Todo } from "../types";
import { useTodos } from "../context/TodoContext";
import PriorityChip from "./PriorityChip";
import { useRef, useState } from "react";

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
        sx={{ pl: 0 }}
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
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [value, setValue] = useState(todo.title);
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <TextField
      multiline
      inputRef={inputRef}
      variant="standard"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => {
        setFocused(false);
        if (value != todo.title) setTitle(todo.id, value);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(event) => {
        if (event.key === "Enter" && !event.shiftKey) {
          if (value != todo.title) setTitle(todo.id, value);
          inputRef.current?.blur();
        } else if (event.key === "Escape") {
          setValue(todo.title);
          inputRef.current?.blur();
        }
      }}
      slotProps={{
        input: {
          disableUnderline: !focused && !hovered,
        },
      }}
      sx={{
        width: "100%",
        pr: 1,
      }}
    />
  );
}
