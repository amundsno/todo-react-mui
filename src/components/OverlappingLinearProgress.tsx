import {
  Box,
  LinearProgress,
  linearProgressClasses,
  type LinearProgressProps,
} from "@mui/material";
import type { ComponentProps } from "react";

type Bar = {
  ratio: number;
  color: LinearProgressProps["color"];
};

type Props = ComponentProps<typeof Box> & {
  bars: Bar[];
};

const getCumulativeBars = (bars: Bar[]): Bar[] => {
  let sum = 0;
  return bars
    .map((bar) => {
      sum += bar.ratio;
      return { ...bar, ratio: sum };
    })
    .reverse();
};

export default function OverlappingLinearProgress({ bars, ...rest }: Props) {
  const cumulativeBars = getCumulativeBars(bars);

  return (
    <Box
      {...rest}
      sx={{
        width: "100%",
        position: "relative",
        ...(rest.sx || {}),
      }}
    >
      <LinearProgress variant="determinate" value={0} color="inherit" />
      {cumulativeBars.map((bar, i) => (
        <LinearProgress
          key={`${bar.color}-${i}`}
          color={bar.color}
          value={bar.ratio * 100}
          variant="determinate"
          sx={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            position: "absolute",
            [`&.${linearProgressClasses.root}`]: {
              backgroundColor: "transparent",
            },
          }}
        />
      ))}
    </Box>
  );
}
