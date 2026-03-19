import LoanRepository, {
    LoanRepositoryMemory
} from "@/creational/abstract-factory/loan/loan-repository";
import InstallmentRepository, {
    InstallmentRepositoryMemory
} from "@/creational/abstract-factory/loan/installment-repository";

export default interface RepositoryFactory {
    createLoanRepository(): LoanRepository
    createInstallmentRepository(): InstallmentRepository
}

export class RepositoryFactoryMemory implements RepositoryFactory{
    createInstallmentRepository(): InstallmentRepository {
        return InstallmentRepositoryMemory.getInstance()
    }

    createLoanRepository(): LoanRepository {
        return LoanRepositoryMemory.getInstance()
    }

}