import { PaymentResponse } from "../interfaces/PaymentStrategy";
import { ExternalPaymentStrategy } from "../interfaces/strategies/ExternalPaymentStrategy";

export class PaypalStrategy implements ExternalPaymentStrategy {
  constructor(public userEmail: string) {}

  execute(userId: string, amount: number): PaymentResponse {
    console.log(
      `Paypal approved the transaction for ${userId} in the amount of $${amount}.`
    );

    return { isSuccess: true };
  }
}
