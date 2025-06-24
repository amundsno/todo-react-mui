import MinimalTextField from "@/components/MinimalTextField";
import { useState } from "react";

export default function TodoListTitle() {
  const [text, setText] = useState("TODO: Placeholder Name");
  return (
    <MinimalTextField
      value={text}
      onChange={(e) => setText(e.target.value)}
      onSave={() => {
        console.log("TODO: onSave placeholder");
      }}
      onCancel={() => {
        console.log("TODO: onCancel placeholder");
      }}
      inputSx={{
        fontSize: 30
      }}

      sx={{
        width: '100%',
        mr: 3
      }}
    />
  );
}
