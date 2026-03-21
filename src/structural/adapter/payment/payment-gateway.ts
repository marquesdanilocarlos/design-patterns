export default interface PaymentGateway {
    set amount(amount: number);
    set installments(installments: number);
    set cardNumber(cardNumber: string);
    set cvv(cvv: string);
    pay(): boolean;
    validateCard(): boolean;
}