import { Chip, type ChipProps } from "@mui/material";
import type { Priority } from "../types";

const colorByPriority: Record<Priority, ChipProps["color"]> = {
  normal: "success",
  medium: "secondary",
  urgent: "warning",
};

type Props = ChipProps & {
  priority: Priority;
};

export default function PriorityChip({ priority, ...rest }: Props) {
  return (
    <Chip
      {...rest}
      label={priority}
      color={colorByPriority[priority]}
      sx={{
        mr: 1,
        width: 75,
        ...(rest.sx || {}),
      }}
    />
  );
}
