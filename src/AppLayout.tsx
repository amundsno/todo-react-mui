import { Outlet } from "react-router";
import { CssBaseline, Stack } from "@mui/material";
import { ColorModeProvider, ToggleColorModeButton } from "@/features/colorMode";

export default function AppLayout() {
  return (
    <ColorModeProvider>
      <CssBaseline />

      {/* Global UI */}
      <Stack direction="row" m={3}>
        <ToggleColorModeButton />
      </Stack>

      {/* Todo List UI */}
      <Outlet />
    </ColorModeProvider>
  );
}
