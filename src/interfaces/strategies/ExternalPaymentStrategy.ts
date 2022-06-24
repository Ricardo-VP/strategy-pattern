import { PaymentStrategy } from "./PaymentStrategy";

export interface ExternalPaymentStrategy extends PaymentStrategy {
    userEmail: string;
}