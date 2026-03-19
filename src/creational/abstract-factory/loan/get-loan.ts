import LoanRepository from "@/creational/abstract-factory/loan/loan-repository";
import InstallmentRepository from "@/creational/abstract-factory/loan/installment-repository";
import RepositoryFactory from "@/creational/abstract-factory/loan/repository-factory";

export type GetLoanInput = {
    loanId: string
}

export type GetLoanOutput = {
    amount: number
    income: number
    installments: {
        number: number,
        amount: number,
        amortization: number,
        interest: number,
        balance: number
    }[]
}

export default class GetLoan {
    private readonly loanRepository: LoanRepository
    private readonly installmentRepository: InstallmentRepository

    constructor(
        repositoryFactory: RepositoryFactory
    ) {
        this.loanRepository = repositoryFactory.createLoanRepository()
        this.installmentRepository = repositoryFactory.createInstallmentRepository()
    }

    async execute(input: GetLoanInput): Promise<GetLoanOutput> {
        const loan = await this.loanRepository.findById(input.loanId)
        const installments = await this.installmentRepository.findByLoanId(input.loanId)
        const output: GetLoanOutput =  {
            amount: loan.amount,
            income: loan.income,
            installments: []
        }

        for (const installment of installments) {
            output.installments.push({
                number: installment.number,
                amount: installment.amount,
                amortization: installment.amortization,
                interest: installment.interest,
                balance: installment.balance
            })
        }

        return output
    }
}