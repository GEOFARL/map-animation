import { AnimationAction, AnimationContext } from "../types";

export class ShowJetInfoCardAction implements AnimationAction {
  async execute(context: AnimationContext) {
    context.showJetInfoCard();
  }
}
