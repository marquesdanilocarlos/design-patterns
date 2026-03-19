import MortgageLoan from "@/creational/abstract-factory/loan/mortgage-loan";
import CarLoan from "@/creational/abstract-factory/loan/car-loan";

test('Deve criar um financiamento imobiliário', () => {
    const loan = MortgageLoan.create(100000, 10000, 240)
    expect(loan.loanId).toBeDefined()
    expect(loan.amount).toBe(100000)
    expect(loan.income).toBe(10000)
    expect(loan.installments).toBe(240)
} )

test('Não deve criar um financiamento imobiliário com prazo superior a 420 meses', () => {
    expect(() => MortgageLoan.create(100000, 10000, 450)).toThrow(
        new Error('The maximum number of installments is 420')
    )
})

test('Não deve criar um financiamento imobiliário caso a parcela ocupe um valor superior a 25% da renda mensal', () => {
    expect(() => MortgageLoan.create(200000, 1000, 420)).toThrow(
        new Error('The installment amount could not exceed 25% of the monthly income')
    )
})

test('Não deve criar um financiamento veicular com prazo superir a 60 meses', () => {
    expect(() => CarLoan.create(100000, 1000, 72)).toThrow(
        new Error('The maximum number of installments is 60')
    )
})

test('Não deve criar um financiamento veicular caso a parcela ocupe um valor superior a 30% da renda mensal', () => {
    expect(() => CarLoan.create(200000, 1000, 60)).toThrow(
        new Error('The installment amount could not exceed 30% of the monthly income')
    )
})