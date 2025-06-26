import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./router/Router";

// Runs before starting the React app to prepare local storage
import "./utils/localStorageSchemaGuard"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
