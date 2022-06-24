import { Checkout } from "./context/Checkout";
import { MastercardStrategy } from "./strategies/MasterCardStrategy";
import { PaypalStrategy } from "./strategies/PaypalStrategy";
import { VisaStrategy } from "./strategies/VisaStrategy";

// Setup
const checkout = new Checkout();

let user = {
  id: "usr-01",
  email: "test@gmail.com",
  cardNumber: "0000-0000-0000-000",
  cvv: "123",
  amount: 2000,
  paymentMethod: "paypal",
};

switch (user.paymentMethod) {
  case "paypal":
    checkout.setStrategy(new PaypalStrategy(user.email));
    break;
  case "visa":
    checkout.setStrategy(new VisaStrategy(user.cardNumber, user.cvv));
    break;
  case "mastercard":
    checkout.setStrategy(new MastercardStrategy(user.cardNumber, user.cvv));
    break;
}

checkout.execute(user.id, user.amount);
