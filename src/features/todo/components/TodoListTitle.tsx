import MinimalTextField from "@/components/MinimalTextField";
import { useListStore } from "@/features/listStore";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function TodoListTitle() {
  const { lists, setListName } = useListStore();
  const { listId } = useParams();

  const currentList = lists.find((list) => list.id === listId);
  const [text, setText] = useState(currentList?.listName ?? "");

  useEffect(() => {
    setText(currentList?.listName ?? "");
  }, [currentList]);

  const handleSave = (newValue: string) => {
    if (!currentList)
      console.error(
        `Could not save list name because the list with ID: '${listId}' was not found`
      );
    else setListName(currentList.id, newValue);
  };

  const handleCancel = () => {
    setText(currentList?.listName ?? "");
  };

  return (
    <MinimalTextField
      value={text}
      onChange={(e) => setText(e.target.value)}
      onSave={handleSave}
      onCancel={handleCancel}
      inputSx={{
        fontSize: 30,
      }}
      sx={{
        width: "100%",
        mr: 3,
      }}
    />
  );
}
