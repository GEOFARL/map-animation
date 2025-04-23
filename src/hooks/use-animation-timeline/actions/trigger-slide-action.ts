import { AnimationContext } from "../types";

export class TriggerSlideAction {
  constructor(private id: string) {}

  async execute(context: AnimationContext) {
    context.triggerSlide(this.id);
  }
}
