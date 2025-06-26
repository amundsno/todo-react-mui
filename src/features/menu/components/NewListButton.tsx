import { useListStore } from "@/features/listStore";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useDrawer } from "../context/DrawerContext";

export default function NewListButton() {
  const { newList } = useListStore();
  const navigate = useNavigate();
  const { setIsOpen } = useDrawer();

  return (
    <Button
      startIcon={<PostAddIcon />}
      sx={{ mb: 2 }}
      onClick={() => {
        const list = newList();
        navigate(`/lists/${list.id}`);
        setIsOpen(false);
      }}
    >
      New List
    </Button>
  );
}
