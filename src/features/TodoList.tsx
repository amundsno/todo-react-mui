import { Divider, List, Paper } from "@mui/material";
import TodoItem from "./TodoItem";
import { Fragment } from "react/jsx-runtime";
import { useTodos } from "../context/TodoContext";

export default function TodoList() {
  const { todos } = useTodos()
  if (todos.length > 0)
    return (
      <List
        component={Paper}
        sx={{
          width: "100%",
        }}
      >
        {todos.map((todo, index) => (
          <Fragment key={todo.id.toString()}>
            {index > 0 && <Divider component="li" />}
            <TodoItem todo={todo} />
          </Fragment>
        ))}
      </List>
    );
}
