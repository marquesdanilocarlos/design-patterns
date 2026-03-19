import Loan from "@/creational/abstract-factory/loan/loan";

export default class MortgageLoan extends Loan {
    protected _rate = 10

    constructor(loanId: string, amount: number, income: number, installments: number) {
        super(loanId, amount, income, installments, 'mortgage')
        if (installments > 420) {
            throw new Error('The maximum number of installments is 420')
        }

        if ((income * 0.25) < (amount/installments)) {
            throw new Error('The installment amount could not exceed 25% of the monthly income')
        }
    }

    static create(amount: number, income: number, installments: number) {
        const loanId = crypto.randomUUID()
        return new MortgageLoan(loanId, amount, income, installments)
    }
}