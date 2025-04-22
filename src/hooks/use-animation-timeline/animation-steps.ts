import { pingConfigs } from "./actions/configs";
import { DelayAction } from "./actions/delay-action";
import { ParallelAction } from "./actions/parallel-action";
import { PingMarkerAction } from "./actions/ping-marker-action";
import { AnimationAction } from "./types";

const DELAY = 1500;

export const animationSteps: AnimationAction[] = [
  new PingMarkerAction("marker2", pingConfigs[0]),
  new DelayAction(DELAY),
  new PingMarkerAction("marker2", pingConfigs[0]),
  new DelayAction(DELAY),
  new PingMarkerAction("marker2", pingConfigs[0]),
  new DelayAction(DELAY),
  new ParallelAction([
    new PingMarkerAction("marker1", pingConfigs[0]),
    new PingMarkerAction("marker2", pingConfigs[0]),
  ]),
  new DelayAction(DELAY),
  new ParallelAction([
    new PingMarkerAction("marker1", pingConfigs[0]),
    new PingMarkerAction("marker2", pingConfigs[0]),
  ]),
  new DelayAction(DELAY),
  new ParallelAction([
    new PingMarkerAction("marker1", pingConfigs[0]),
    new PingMarkerAction("marker2", pingConfigs[0]),
  ]),
  new DelayAction(DELAY),
  new ParallelAction([
    new PingMarkerAction("marker1", pingConfigs[0]),
    new PingMarkerAction("marker2", pingConfigs[1]),
  ]),
  new DelayAction(DELAY),
  new ParallelAction([
    new PingMarkerAction("marker1", {
      ...pingConfigs[1],
      count: "infinite",
    }),
    new PingMarkerAction("marker2", {
      ...pingConfigs[1],
      count: "infinite",
    }),
  ]),
];
