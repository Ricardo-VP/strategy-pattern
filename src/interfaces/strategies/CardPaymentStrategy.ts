import { PaymentStrategy } from "../PaymentStrategy";

export interface CardPaymentStrategy extends PaymentStrategy {
    cardNumber: string;
    cvv: string;
}