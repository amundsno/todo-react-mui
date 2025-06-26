import { useListStore, type ListStoreItem } from "@/features/listStore";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

type Props = {
  item: ListStoreItem;
  openDialog: boolean;
  setOpenDialog: (open: boolean) => void;
};

export default function DeleteDialog({
  openDialog,
  setOpenDialog,
  item,
}: Props) {
  const navigate = useNavigate();
  const { listId } = useParams();
  const { removeList, getList } = useListStore();

  const todoListLength = getList(item.id)?.length;

  const handleDelete = () => {
    removeList(item.id);
    if (item.id === listId) navigate(`/lists`);
    setOpenDialog(false);
  };

  // Reason: Skip dialog if the list is empty
  useEffect(() => {
    if (openDialog && todoListLength === 0) {
      handleDelete();
    }
    // Reason: handleDelete() uses parameters that are stable during the Dialog render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openDialog, todoListLength]);

  return (
    <Dialog
      open={openDialog}
      onClose={() => {
        setOpenDialog(false);
      }}
    >
      <DialogTitle>Delete {item.listName}?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete "{item.listName}" ({todoListLength}{" "}
          item{todoListLength! > 1 ? "s" : ""})?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDelete} color="error">
          Delete
        </Button>
        <Button
          autoFocus
          onClick={() => {
            setOpenDialog(false);
          }}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
