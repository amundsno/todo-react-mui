import { Stack } from "@mui/material";
import HideCompletedTodosChip from "./HideCompletedTodosChip";
import TodoListTitle from "./TodoListTitle";

export default function TodoListHeader() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="baseline"
      sx={{
        width: "100%",
        mb: 1,
      }}
    >
      <TodoListTitle />
      <HideCompletedTodosChip />
    </Stack>
  );
}
