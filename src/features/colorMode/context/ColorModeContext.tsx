/* eslint-disable react-refresh/only-export-components */
// Reason: For simplicity, this file exports both provider component and context logic.

import { usePersistedState } from "@/hooks/usePersistedState";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

type ColorMode = "light" | "dark";

type ColorModeContextType = {
  toggleColorMode: () => void;
  colorMode: ColorMode;
};

const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined
);

export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (!context)
    throw new Error(
      "The 'useColorMode()' hook must be used within a ColorModeProvider"
    );
  return context;
}

const STORAGE_KEY = "colorMode";

export function ColorModeProvider({ children }: { children: ReactNode }) {
  const [colorMode, setColorMode] = usePersistedState<ColorMode>("dark", STORAGE_KEY);

  const toggleColorMode = () => {
    setColorMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const theme = useMemo(
    () => createTheme({ palette: { mode: colorMode } }),
    [colorMode]
  );

  return (
    <ColorModeContext value={{ toggleColorMode, colorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext>
  );
}
