import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useColorMode } from "../context/ColorModeContext";

export default function ToggleColorModeButton() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <IconButton onClick={toggleColorMode}>
      {colorMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}
