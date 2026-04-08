import Gateway from "@/behavioural/template-method/gateway";

export default abstract class Payment {
    constructor(
        protected readonly value: number,
        protected readonly gateway: Gateway,
    ) {}

    abstract calculateDiscount(): number

    calculateTax(): number {
        return 0
    }

    executeCharge(): string {
        const valorFinal = this.value + this.calculateTax() - this.calculateDiscount();
        return this.gateway.charge(valorFinal);
    }
}