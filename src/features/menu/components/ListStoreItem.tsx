import { type ListStoreItem } from "@/features/listStore";
import { ListItem, ListItemButton, Stack, useTheme } from "@mui/material";

import { useNavigate, useParams } from "react-router";
import DeleteListStoreItemButton from "./DeleteListStoreItemButton";
import { useDrawer } from "../context/DrawerContext";

type Props = {
  item: ListStoreItem;
};

export default function ListStoreItem({ item }: Props) {
  const navigate = useNavigate();
  const { listId } = useParams();
  const theme = useTheme();
  const { setIsOpen } = useDrawer();

  return (
    <ListItem disableGutters>
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-between"
        pl={1}
        borderRadius={1}
      >
        <ListItemButton
          sx={{
            backgroundColor:
              item.id === listId ? theme.palette.action.hover : "none",
          }}
          onClick={() => {
            navigate(`/lists/${item.id}`);
            setIsOpen(false);
          }}
        >
          {item.listName}
        </ListItemButton>
        <DeleteListStoreItemButton item={item} />
      </Stack>
    </ListItem>
  );
}
