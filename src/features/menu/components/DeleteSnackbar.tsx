import { Snackbar } from "@mui/material";
import { useDrawer } from "../context/DrawerContext";

export default function DeleteSnackbar() {
  const { snackbar } = useDrawer();
  return (
    <Snackbar
      message={snackbar.message}
      open={snackbar.open}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      autoHideDuration={3000}
      onClose={snackbar.close}
    />
  );
}
