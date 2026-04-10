export default class Order {
  private amount: number;

  constructor(amount: number = 0) {
    this.amount = amount;
  }

  public getAmount(): number {
    return this.amount;
  }

  public setAmount(amount: number): void {
    this.amount = amount;
  }
}
