import { useListStore } from "@/features/listStore";
import { List } from "@mui/material";
import ListStoreItem from "./ListStoreItem";

export default function ListStoreList() {
  const { lists } = useListStore();

  return (
    <List>
      {lists.map((item) => (
        <ListStoreItem key={item.id} item={item} />
      ))}
    </List>
  );
}
