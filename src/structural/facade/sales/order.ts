import { Customer } from '../customer';
import { Product } from '../product';

export class Order {
  private products: Product[] = [];
  private totalAmount = 0;

  constructor(private customer: Customer) {}

  public setCustomer(customer: Customer): void {
    this.customer = customer;
  }

  public addProduct(product: Product): void {
    this.products.push(product);
    this.totalAmount += product.getPrice();
  }

  public getCustomer(): Customer {
    return this.customer;
  }

  public getProducts(): Product[] {
    return this.products;
  }

  public getTotalAmount(): number {
    return this.totalAmount;
  }
}
