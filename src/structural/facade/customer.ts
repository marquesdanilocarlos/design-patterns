export class Customer {
  constructor(
    private readonly name: string,
    private readonly cpf: string,
    private readonly email: string,
  ) {}

  public getName(): string {
    return this.name;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getEmail(): string {
    return this.email;
  }
}
