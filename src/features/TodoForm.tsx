import { Box, IconButton, Paper, TextField } from "@mui/material";
import { useState, type FormEvent } from "react";
import { useTodos } from "../context/useTodos";
import SendIcon from "@mui/icons-material/Send";

export default function TodoForm() {
  const { addTodo } = useTodos();
  const [text, setText] = useState("");

  const handleSubmit = (event?: FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <Box
      component="form"
      name="todo-form"
      onSubmit={handleSubmit}
      sx={{
        mt: 1,
        width: "100%",
        position: "relative",
      }}
    >
      <TextField
        placeholder="Add an item..."
        fullWidth
        multiline
        autoFocus
        component={Paper}
        variant="outlined"
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            handleSubmit();
          }
        }}
        maxRows={4}
        slotProps={{
          input: {
            endAdornment: (
              <IconButton
                disabled={!text.trim()}
                onClick={() => handleSubmit()}
                color="primary"
              >
                <SendIcon />
              </IconButton>
            ),
          },
        }}
      />
    </Box>
  );
}
