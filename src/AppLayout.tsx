import { Outlet } from "react-router";
import { CssBaseline, Stack } from "@mui/material";
import { ColorModeProvider, ToggleColorModeButton } from "@/features/colorMode";
import { ListStoreProvider } from "./features/listStore";

export default function AppLayout() {
  return (
    <ColorModeProvider>
      <ListStoreProvider>
        <CssBaseline />

        {/* Global UI */}
        <Stack direction="row" m={3}>
          <ToggleColorModeButton />
        </Stack>

        {/* Todo List UI */}
        <Outlet />
      </ListStoreProvider>
    </ColorModeProvider>
  );
}
