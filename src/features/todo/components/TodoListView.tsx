import { Box, Typography } from "@mui/material";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoProvider } from "../context/TodoContext";
import { useParams } from "react-router";
import TodoListHeader from "./TodoListHeader";
import TodoProgressBar from "./TodoProgressBar";

export function TodoListView() {
  const {listId} = useParams()
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography>List ID: {listId ? listId : "none"}</Typography>
      <TodoProvider>
        <Box
          sx={{
            maxWidth: {
              xs: "90%",
              sm: 500,
              md: 800,
            },
            width: "100%",
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
