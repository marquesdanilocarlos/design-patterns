import Gateway from './gateway';
import Payment from "@/behavioural/template-method/payment";

export default class DebitPayment extends Payment{
  constructor(
      value: number,
      gateway: Gateway,
  ) {
    super(value, gateway);
  }

  // Calcula a taxa do Gateway.
  calculateTax(): number {
    // Retorna uma taxa de 4 reais.
    return 4;
  }

  // Calcula o desconto.
  calculateDiscount(): number {
    // Retorna o valor do pagamento com desconto de 5%.
    return this.value * 0.05;
  }
}
