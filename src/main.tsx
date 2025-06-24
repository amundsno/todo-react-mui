import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "./AppLayout";
import TodoListView from "./features/TodoListView";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={AppLayout}>
          <Route index element={<Navigate to="/lists" replace />} />
          <Route path="lists/:listId?" Component={TodoListView} />
          <Route path="*" element={<Navigate to="/lists" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
