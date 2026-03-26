import { Payment } from './payment';

export class CreditCardPayment extends Payment {
  public processPayment(): boolean {
    if (this.order.getTotalAmount() > 0) {
      return true;
    }

    return false;
  }
}
