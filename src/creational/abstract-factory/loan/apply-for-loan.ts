import LoanRepository from "@/creational/abstract-factory/loan/loan-repository";
import InstallmentRepository from "@/creational/abstract-factory/loan/installment-repository";
import RepositoryFactory from "@/creational/abstract-factory/loan/repository-factory";
import LoanFactory from "@/creational/abstract-factory/loan/loan-factory";

export type ApplyForLoanInput = {
    amount: number
    income: number
    installments: number
}

export type ApplyForLoanOutput = {
    loanId: string
}

export default class ApplyForLoan {
    private readonly loanRepository: LoanRepository
    private readonly installmentRepository: InstallmentRepository

    constructor(
        private readonly repositoryFactory: RepositoryFactory,
        private readonly loanFactory: LoanFactory
    ) {
        this.loanRepository = this.repositoryFactory.createLoanRepository()
        this.installmentRepository = this.repositoryFactory.createInstallmentRepository()
    }

    async execute(input: ApplyForLoanInput): Promise<ApplyForLoanOutput> {
        const loan = this.loanFactory.createLoan(input.amount, input.income, input.installments)
        const installments = this.loanFactory.createInstallmentCalculator().calculate(loan)
        await this.loanRepository.save(loan)
        for (const installment of installments) {
            await this.installmentRepository.save(installment)
        }
        return {
            loanId: loan.loanId
        }
    }
}