import Loan from "@/creational/abstract-factory/loan/loan";

export default interface LoanRepository {
    save(loan: Loan): Promise<void>
    findById(loanId: string): Promise<Loan>
}

export class LoanRepositoryMemory implements LoanRepository {
    private readonly loans: Loan[] = []
    static instance: LoanRepositoryMemory

    private constructor() {
    }

    async findById(loanId: string): Promise<Loan> {
        const loan = this.loans.find(loan => loan.loanId === loanId)
        if (!loan) {
            throw new Error('Loan not found')
        }
        return loan
    }

    async save(loan: Loan): Promise<void> {
        this.loans.push(loan)
    }

    static getInstance(): LoanRepositoryMemory {
        if (!this.instance) {
            this.instance = new LoanRepositoryMemory()
        }
        return this.instance
    }

}