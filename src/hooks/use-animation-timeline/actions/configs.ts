import { PingConfig } from "../types";

export const pingConfigs: PingConfig[] = [
  {
    duration: 500,
    count: 3,
    color: "bg-animation-red" as const,
  },
  {
    duration: 750,
    count: 2,
    color: "bg-animation-green" as const,
    animationType: "flash-slow",
  },
];
