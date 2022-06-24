import {
  PaymentResponse,
  PaymentStrategy,
} from "../interfaces/PaymentStrategy";

export class Checkout {
  private context?: PaymentStrategy;

  public setStrategy(context: PaymentStrategy) {
    this.context = context;
  }

  public execute(userId: string, amount: number): PaymentResponse {
    if (!this.context) {
      throw new Error("Context must be defined");
    }

    return this.context.execute(userId, amount);
  }
}
