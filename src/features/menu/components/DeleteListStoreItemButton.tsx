import { type ListStoreItem } from "@/features/listStore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton } from "@mui/material";
import { useState } from "react";
import DeleteDialog from "./DeleteDialog";

type Props = {
  item: ListStoreItem;
};

export default function DeleteListStoreItemButton({ item }: Props) {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <IconButton
        onClick={() => {
          setOpenDialog(true);
        }}
      >
        <DeleteForeverIcon />
      </IconButton>
      <DeleteDialog
        item={item}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      />
    </>
  );
}
