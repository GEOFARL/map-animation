import { pingConfigs } from "./actions/configs";
import { DelayAction } from "./actions/delay-action";
import { ParallelAction } from "./actions/parallel-action";
import { PingMarkerAction } from "./actions/ping-marker-action";
import { ShowCardAction } from "./actions/show-card-action";
import { TriggerSlideAction } from "./actions/trigger-slide-action";
import { UpdateTimeCardVariantAction } from "./actions/update-time-card-variant-action";
import { AnimationAction } from "./types";

const DELAY = 1500;

export const animationSteps: AnimationAction[] = [
  new PingMarkerAction("marker2", pingConfigs[0]),
  new DelayAction(DELAY),
  new ShowCardAction("step1"),
  new PingMarkerAction("marker2", pingConfigs[0]),
  new DelayAction(DELAY),
  new ShowCardAction("step2"),
  new PingMarkerAction("marker2", pingConfigs[0]),
  new DelayAction(DELAY),
  new ParallelAction([
    new PingMarkerAction("marker1", pingConfigs[0]),
    new PingMarkerAction("marker2", pingConfigs[0]),
  ]),
  new DelayAction(DELAY),
  new ShowCardAction("step3"),
  new ParallelAction([
    new PingMarkerAction("marker1", pingConfigs[0]),
    new PingMarkerAction("marker2", pingConfigs[0]),
  ]),
  new DelayAction(DELAY),
  new ShowCardAction("step4"),
  new ParallelAction([
    new PingMarkerAction("marker1", pingConfigs[0]),
    new PingMarkerAction("marker2", pingConfigs[0]),
  ]),
  new DelayAction(DELAY),
  new TriggerSlideAction("cardStep1"),
  new DelayAction(200),
  new TriggerSlideAction("cardStep2"),
  new ParallelAction([
    new PingMarkerAction("marker1", pingConfigs[0]),
    new PingMarkerAction("marker2", pingConfigs[1]),
  ]),
  new DelayAction(DELAY),
  new TriggerSlideAction("cardStep3"),
  new UpdateTimeCardVariantAction(),
  new DelayAction(200),
  new TriggerSlideAction("cardStep4"),
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
