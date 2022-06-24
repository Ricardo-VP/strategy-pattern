import { PaymentResponse } from "../interfaces/PaymentStrategy";
import { CardPaymentStrategy } from "../interfaces/strategies/CardPaymentStrategy";

export class MastercardStrategy implements CardPaymentStrategy {
  constructor(public cardNumber: string, public cvv: string) {}

  execute(userId: string, amount: number): PaymentResponse {
    console.log(
      `Mastercard approved the transaction for ${userId} in the amount of ${amount}.`
    );
    return { isSuccess: true };
  }
}
