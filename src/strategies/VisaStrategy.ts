import { PaymentResponse } from "../interfaces/PaymentStrategy";
import { CardPaymentStrategy } from "../interfaces/strategies/CardPaymentStrategy";

export class VisaStrategy implements CardPaymentStrategy {
  constructor(public cardNumber: string, public cvv: string) {}

  execute(userId: string, amount: number): PaymentResponse {
    console.log(
      `Visa approved the transaction for ${userId} in the amount of $${amount}.`
    );
    return { isSuccess: true };
  }
}
