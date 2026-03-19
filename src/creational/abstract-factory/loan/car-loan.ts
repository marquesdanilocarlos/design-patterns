import Loan from "@/creational/abstract-factory/loan/loan";

export default class CarLoan extends Loan {
    protected _rate = 15

    constructor(loanId: string, amount: number, income: number, installments: number) {
        super(loanId, amount, income, installments, 'mortgage')
        if (installments > 60) {
            throw new Error('The maximum number of installments is 60')
        }

        if ((income * 0.3) < (amount/installments)) {
            throw new Error('The installment amount could not exceed 30% of the monthly income')
        }
    }

    static create(amount: number, income: number, installments: number) {
        const loanId = crypto.randomUUID()
        return new CarLoan(loanId, amount, income, installments)
    }
}