import AppLayout from "@/AppLayout";
import { ListStoreProvider } from "@/features/listStore";
import { TodoListView } from "@/features/todo";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import ListStoreRedirectGuard from "./ListStoreRedirectGuard";

export default function Router() {
  return (
    <ListStoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={AppLayout}>
            <Route index element={<Navigate to="/lists" replace />} />
            <Route
              path="lists/:listId?"
              element={
                <ListStoreRedirectGuard>
                  <TodoListView />
                </ListStoreRedirectGuard>
              }
            />
            <Route path="*" element={<Navigate to="/lists" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ListStoreProvider>
  );
}
