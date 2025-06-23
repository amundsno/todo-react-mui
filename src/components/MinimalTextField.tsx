import { TextField, type SxProps, type Theme } from "@mui/material";
import { useRef, useState } from "react";

type Props = {
  value: string;
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  onSave: (newValue: string) => void;
  onCancel: () => void;
  multiline?: boolean;
  inputSx?: SxProps<Theme>;
  sx?: SxProps<Theme>;
};

export default function MinimalTextField({
  value = "",
  onChange,
  onSave,
  onCancel,
  multiline = false,
  inputSx = {},
  sx = {},
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <TextField
      multiline={multiline}
      inputRef={inputRef}
      variant="standard"
      value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => {
        setFocused(false);
        onSave(value);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onKeyDown={(event) => {
        if (event.key === "Enter" && (!event.shiftKey || !multiline)) {
          event.preventDefault();
          onSave(value);
          inputRef.current?.blur();
        } else if (event.key === "Escape") {
          onCancel();

          // Blurring calls handleSave();
          // The timeout ensures React has reset the value before saving
          setTimeout(() => inputRef.current?.blur());
        }
      }}
      slotProps={{
        input: {
          disableUnderline: !focused && !hovered,
          sx: inputSx,
        },
      }}
      sx={sx}
    />
  );
}
