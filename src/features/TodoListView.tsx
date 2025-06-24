import { Box, Typography } from "@mui/material";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoProvider } from "../context/TodoContext";
import TodoProgressBar from "./TodoProgressBar";
import TodoToolBar from "./TodoToolBar";
import { useParams } from "react-router";

export default function TodoListView() {
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
          <TodoToolBar />
          <TodoProgressBar />
          <TodoList />
          <TodoForm />
        </Box>
      </TodoProvider>
    </Box>
  );
}
