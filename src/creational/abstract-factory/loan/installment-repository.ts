import Installment from "@/creational/abstract-factory/loan/installment";

export default interface InstallmentRepository {
    save(installment: Installment): Promise<void>
    findByLoanId(loanId: string): Promise<Installment[]>
}

export class InstallmentRepositoryMemory implements InstallmentRepository {
    private readonly installments: Installment[] = []
    static instance: InstallmentRepositoryMemory

    private constructor() {
    }

    async findByLoanId(loanId: string): Promise<Installment[]> {
        const installments = this.installments.filter(installment => installment.loanId === loanId)
        if (!installments) {
            throw new Error('Installment not found')
        }
        return installments
    }

    async save(installment: Installment): Promise<void> {
        this.installments.push(installment)
    }

    static getInstance(): InstallmentRepositoryMemory {
        if (!this.instance) {
            this.instance = new InstallmentRepositoryMemory()
        }
        return this.instance
    }

}