import { Order } from './order';

export abstract class Payment {
  constructor(protected readonly order: Order) {}

  public abstract processPayment(): boolean;
}
