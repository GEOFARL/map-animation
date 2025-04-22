import { AnimationAction } from "../types";

export class DelayAction implements AnimationAction {
  constructor(private duration: number) {}

  async execute() {
    await new Promise((res) => setTimeout(res, this.duration));
  }
}
