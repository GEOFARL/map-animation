export type PingConfig = {
  duration: number;
  count: number | "infinite";
  color: "bg-animation-red" | "bg-animation-green";
  animationType?: "flash-fast" | "flash-slow";
  key?: number;
};

export type AnimationStep = {
  action: AnimationAction | null;
  duration: number;
};

export interface AnimationAction {
  execute(context: AnimationContext): Promise<void>;
}

export interface AnimationContext {
  setMarkerPing: (markerId: string, config: PingConfig | null) => void;
  setCardStepVisible: (stepId: string, visible: boolean) => void;
}
