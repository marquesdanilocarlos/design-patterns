import { Payment } from './payment';

export class BankSlipPayment extends Payment {
  public processPayment(): boolean {
    if (this.order.getTotalAmount() > 0) {
      return true;
    }

    return false;
  }
}
