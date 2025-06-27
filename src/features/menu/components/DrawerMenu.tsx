import { Divider, Drawer, IconButton, Stack } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NewListButton from "./NewListButton";
import ListStoreList from "./ListStoreList";
import { DrawerContextProvider, useDrawer } from "../context/DrawerContext";
import type { DrawerProps } from "node_modules/@mui/material";
import DeleteSnackbar from "./DeleteSnackbar";
import GitHubButtom from "./GitHubButtom";

type Props = {
  variant: DrawerProps["variant"];
};

export function DrawerMenu({ variant }: Props) {
  return (
    <DrawerContextProvider>
      <DrawerMenuInternal variant={variant} />
      <DeleteSnackbar />
    </DrawerContextProvider>
  );
}

function DrawerMenuInternal({ variant }: Props) {
  const { isOpen, setIsOpen } = useDrawer();
  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        variant={variant}
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Stack p={2} width={300} flexGrow={1} overflow="auto">
          <ListStoreList />
          <NewListButton />
        </Stack>
        <Divider />
        <GitHubButtom drawerVariant={variant} />
      </Drawer>
    </>
  );
}
