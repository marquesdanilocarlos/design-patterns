import Gateway from './gateway';
import Payment from "@/behavioural/template-method/payment";

export default class CreditPayment extends Payment{
  constructor(
    value: number,
    gateway: Gateway,
  ) {
    super(value, gateway);
  }

  // Calcula a taxa do Gateway.
  calculateTax(): number {
    // Retorna uma taxa de 5% sobre o valor do pagamento.
    return this.value * 0.05;
  }

  // Calcula o desconto.
  calculateDiscount(): number {
    // Se o valor pago for maior que 300 reais.
    if (this.value > 300) {
      // Retorna um desconto de 2% sobre o valor do pagamento.
      return this.value * 0.02;
    }

    // Pagamentos de valores menores ou iguais a 300 reais não possuem desconto.
    return 0;
  }
}
