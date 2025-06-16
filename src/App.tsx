import { Box, CssBaseline } from "@mui/material";
import { TodoProvider } from "./context/TodoProvider";
import TodoList from "./features/TodoList";
import TodoForm from "./features/TodoForm";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          backgroundColor: "#eeeeee",
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
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
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
