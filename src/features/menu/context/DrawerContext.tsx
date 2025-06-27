// Reason: For simplicity, this file exports both provider component and context logic.
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, type ReactNode } from "react";

type DrawerContextType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean | ((prev: boolean) => boolean)) => void;
  snackbar: {
    open: boolean;
    message: string;
    show: (message: string) => void;
    close: () => void;
  };
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export function useDrawer() {
  const context = useContext(DrawerContext);
  if (!context)
    throw new Error(
      "The 'useDrawer()' hook must be used within a DrawerContextProvider"
    );
  return context;
}

export function DrawerContextProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  // Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const show = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const close = () => setSnackbarOpen(false);

  return (
    <DrawerContext
      value={{
        isOpen,
        setIsOpen,
        snackbar: {
          open: snackbarOpen,
          message: snackbarMessage,
          show: show,
          close: close,
        },
      }}
    >
      {children}
    </DrawerContext>
  );
}
