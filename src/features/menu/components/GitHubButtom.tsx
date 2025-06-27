import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, type DrawerProps } from "@mui/material";

type Props = {
  drawerVariant: DrawerProps["variant"];
};

export default function GitHubButtom({ drawerVariant }: Props) {
  return (
    <Button
      startIcon={<GitHubIcon />}
      variant={drawerVariant === "permanent" ? "outlined" : "contained"}
      href="https://github.com/amundsno/todo-react-mui"
      target="_new_tab"
      sx={{
        m: 3,
        position: "relative",
        bottom: 0,
      }}
    >
      View project on GitHub
    </Button>
  );
}
