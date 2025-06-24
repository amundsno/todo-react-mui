import { Outlet } from "react-router";
import { ColorModeProvider } from "./context/ColorModeContext";
import { CssBaseline, Stack } from "@mui/material";
import ToggleColorModeButton from "./features/ToggleColorModeButton";

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
