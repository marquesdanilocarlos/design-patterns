import { Order } from './order';

export class OrderEmail {
  constructor(private readonly order: Order) {}

  public sendEmail(message: string): string {
    return `Email sent to ${this.order.getCustomer().getEmail()}. ${message}`;
  }
}
