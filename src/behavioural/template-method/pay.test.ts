import Gateway from "@/behavioural/template-method/gateway";
import CreditPayment from "@/behavioural/template-method/credit-payment";
import DebitPayment from "@/behavioural/template-method/debit-payment";
import MoneyPayment from "@/behavioural/template-method/money-payment";

test('Deve realizar pagamento via crédito', () => {
    const gateway = new Gateway()
    const creditPayment = new CreditPayment(100, gateway)

    expect(creditPayment.executeCharge()).toEqual('Valor a ser cobrado: 105')
})

test('Deve realizar pagamento via crédito com desconto', () => {
    const gateway = new Gateway()
    const creditPayment = new CreditPayment(400, gateway)

    expect(creditPayment.executeCharge()).toEqual('Valor a ser cobrado: 412')
})

test('Deve realizar pagamento via débito', () => {
    const gateway = new Gateway()
    const creditPayment = new DebitPayment(200, gateway)

    expect(creditPayment.executeCharge()).toEqual('Valor a ser cobrado: 194')
})

test('Deve realizar pagamento via dinheiro', () => {
    const gateway = new Gateway()
    const creditPayment = new MoneyPayment(50, gateway)

    expect(creditPayment.executeCharge()).toEqual('Valor a ser cobrado: 45')
})