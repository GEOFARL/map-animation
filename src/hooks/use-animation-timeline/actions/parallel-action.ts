import { AnimationAction, AnimationContext } from "../types";

export class ParallelAction implements AnimationAction {
  constructor(private actions: AnimationAction[]) {}

  async execute(context: AnimationContext) {
    await Promise.all(this.actions.map((action) => action.execute(context)));
  }
}
