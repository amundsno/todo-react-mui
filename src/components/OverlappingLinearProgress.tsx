import {
  Box,
  LinearProgress,
  linearProgressClasses,
  Tooltip,
  type LinearProgressProps,
} from "@mui/material";
import { useState, type ComponentProps, type ReactNode } from "react";

export type Bar = {
  ratio: number;
  color: LinearProgressProps["color"];
};

type Props = ComponentProps<typeof Box> & {
  bars: Bar[];
  tooltip?: ReactNode;
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

function CumulativeBars({ bars }: { bars: Bar[] }) {
  const cumulativeBars = getCumulativeBars(bars);
  return (
    <>
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
    </>
  );
}

export default function OverlappingLinearProgress({
  bars,
  tooltip,
  ...rest
}: Props) {
  const [hovered, setHovered] = useState(false);

  const progressBar = (
    <Box
      onMouseEnter={() => {
        if (!tooltip) setHovered(true);
      }}
      onMouseLeave={() => {
        if (!tooltip) setHovered(false);
      }}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        ...(rest.sx || {}),
      }}
      {...rest}
    >
      <Box
        sx={{
          height: 4,
          transformOrigin: "bottom",
          transform: hovered ? "scaleY(2)" : "scaleY(1)",
          transition: "transform 0.3s ease",
        }}
      >
        <CumulativeBars bars={bars} />
      </Box>
    </Box>
  );

  return tooltip ? (
    <Tooltip
      title={tooltip}
      placement="top-start"
      onOpen={() => setHovered(true)}
      onClose={() => setHovered(false)}
    >
      {progressBar}
    </Tooltip>
  ) : (
    progressBar
  );
}
