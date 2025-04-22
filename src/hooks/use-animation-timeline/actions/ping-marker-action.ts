import { AnimationAction, AnimationContext, PingConfig } from "../types";

export class PingMarkerAction implements AnimationAction {
  constructor(private markerId: string, private config: PingConfig | null) {}

  async execute(context: AnimationContext) {
    context.setMarkerPing(this.markerId, {
      ...this.config,
      key: Date.now(),
    } as PingConfig);
  }
}
