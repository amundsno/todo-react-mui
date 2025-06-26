import { Box } from "@mui/material";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoProvider } from "../context/TodoContext";
import TodoListHeader from "./TodoListHeader";
import TodoProgressBar from "./TodoProgressBar";

export function TodoListView() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TodoProvider>
        <Box
          sx={{
            maxWidth: 1000,
            width: "85%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TodoListHeader />
          <TodoProgressBar />
          <TodoList />
          <TodoForm />
        </Box>
      </TodoProvider>
    </Box>
  );
}
