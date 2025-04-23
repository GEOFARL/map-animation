import { AnimationContext } from "../types";

export class UpdateTimeCardVariantAction {
  async execute(context: AnimationContext) {
    context.setTimeCardVariant("updated");
  }
}
