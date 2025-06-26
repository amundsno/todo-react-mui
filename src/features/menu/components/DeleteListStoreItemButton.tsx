import { useListStore, type ListStoreItem } from "@/features/listStore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton } from "@mui/material";
import { useNavigate, useParams } from "react-router";

type Props = {
  item: ListStoreItem;
};

export default function DeleteListStoreItemButton({ item }: Props) {
  const navigate = useNavigate();
  const { listId } = useParams();
  const { removeList } = useListStore();

  return (
    <IconButton
      onClick={() => {
        removeList(item.id);
        if (item.id === listId) navigate(`/lists`);
      }}
    >
      <DeleteForeverIcon />
    </IconButton>
  );
}
