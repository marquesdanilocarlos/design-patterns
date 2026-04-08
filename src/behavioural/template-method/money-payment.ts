import Gateway from './gateway';
import Payment from "@/behavioural/template-method/payment";

export default class MoneyPayment extends Payment {
    constructor(
        value: number,
        gateway: Gateway,
    ) {
        super(value, gateway);
    }

    // Calcula o desconto.
    calculateDiscount(): number {
        // Retorna o valor do pagamento com desconto de 10%.
        return this.value * 0.1;
    }
}
