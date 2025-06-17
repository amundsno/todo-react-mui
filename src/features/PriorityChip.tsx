import { Chip, type ChipProps } from "@mui/material";
import { colorByPriority, type Priority } from "../types";

type Props = ChipProps & {
  priority: Priority;
};

export default function PriorityChip({ priority, ...rest }: Props) {
  return (
    <Chip
      {...rest}
      label={priority}
      color={colorByPriority[priority] as ChipProps["color"]}
      sx={{
        mr: 1,
        width: 75,
        ...(rest.sx || {}),
      }}
    />
  );
}
