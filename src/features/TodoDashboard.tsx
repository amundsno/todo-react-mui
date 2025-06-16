import { Box, CssBaseline, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useColorMode } from "../context/ColorModeContext";
import { TodoProvider } from "../context/TodoContext";

export default function TodoDashboard() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <CssBaseline />
      <IconButton
        onClick={toggleColorMode}
        sx={{
          m: 3,
        }}
      >
        {colorMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
      <Box
        sx={{
          backgroundColor: "background.default",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TodoProvider>
          <Box
            sx={{
              maxWidth: 600,
              width: "100%",
              mt: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TodoList />
            <TodoForm />
          </Box>
        </TodoProvider>
      </Box>
    </>
  );
}
