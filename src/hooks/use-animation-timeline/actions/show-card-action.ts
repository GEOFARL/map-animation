import { AnimationAction, AnimationContext } from "../types";

export class ShowCardAction implements AnimationAction {
  constructor(private stepId: string) {}

  async execute(context: AnimationContext) {
    context.setCardStepVisible(this.stepId, true);
  }
}
