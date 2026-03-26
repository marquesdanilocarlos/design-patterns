export class Product {
  constructor(
    private readonly name: string,
    private readonly description: string,
    private readonly price: number,
  ) {}

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getPrice(): number {
    return this.price;
  }
}
