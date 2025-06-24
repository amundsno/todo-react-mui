import { Stack } from "@mui/material";
import HideCompletedTodosChip from "./HideCompletedTodosChip";

export default function TodoToolBar() {
  return (
    <Stack
      direction="row"
      justifyContent="right"
      sx={{
        width: "100%",
        mb: 2,
      }}
    >
      <HideCompletedTodosChip />
    </Stack>
  );
}
