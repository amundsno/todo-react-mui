import { Box, Typography, Divider } from "@mui/material";
import { type Priority, colorByPriority } from "../types";
import { useTodos } from "../context/TodoContext";
import { useColorMode } from "../context/ColorModeContext";

export default function TodoTooltip() {
  return (
    <Box width={120}>
      <TooltipLabel priority="total" />
      <Divider />
      <TooltipLabel priority="urgent" />
      <TooltipLabel priority="medium" />
      <TooltipLabel priority="normal" />
    </Box>
  );
}

function TooltipLabel({ priority }: { priority: Priority | "total" }) {
  const { todos } = useTodos();
  const { colorMode } = useColorMode();

  let done, total;
  if (priority === "total") {
    total = todos.length;
    done = todos.filter((x) => x.done).length;
  } else {
    total = todos.filter((x) => x.priority === priority).length;
    done = todos.filter((x) => x.priority === priority && x.done).length;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography
        color={
          priority === "total"
            ? ""
            : `${colorByPriority[priority]}${
                colorMode === "light" ? ".light" : ""
              }`
        }
        display="inline"
      >
        {priority}:{" "}
      </Typography>
      <Typography display="inline" textAlign="right">
        {done} / {total}
      </Typography>
    </Box>
  );
}
