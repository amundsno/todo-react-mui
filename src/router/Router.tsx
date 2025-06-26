import AppLayout from "@/AppLayout";

import { TodoListView } from "@/features/todo";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={AppLayout}>
          <Route index element={<Navigate to="/lists" replace />} />
          <Route path="lists/:listId?" Component={TodoListView} />
          <Route path="*" element={<Navigate to="/lists" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
