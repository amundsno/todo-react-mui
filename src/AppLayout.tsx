import { Outlet } from "react-router";
import { Box, CssBaseline, Stack } from "@mui/material";
import { ColorModeProvider, ToggleColorModeButton } from "@/features/colorMode";
import { DrawerMenu } from "@/features/menu";
import { useWindowWidth } from "@react-hook/window-size/throttled";

const drawerMenuWidth = 300;
const drawerMenuPermanenBreakpoint = 1000;

export default function AppLayout() {
  const screenWidth = useWindowWidth();
  const isPermanentMenu = screenWidth >= drawerMenuPermanenBreakpoint;

  return (
    <ColorModeProvider>
      <CssBaseline />
      {/* Global UI */}
      <Stack direction="row" m={3} justifyContent="space-between">
        <DrawerMenu variant={isPermanentMenu ? "permanent" : "temporary"} />
        <ToggleColorModeButton />
      </Stack>

      {/* Todo List UI */}
      <Box
        ml={isPermanentMenu ? `${drawerMenuWidth}px` : 0}
        width={isPermanentMenu ? `${screenWidth - drawerMenuWidth}px` : "100%"}
      >
        <Outlet />
      </Box>
    </ColorModeProvider>
  );
}
