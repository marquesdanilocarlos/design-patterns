import Loan from "@/creational/abstract-factory/loan/loan";
import InstallmentCalculator from "@/creational/abstract-factory/loan/installment-calculator";
import MortgageLoan from "@/creational/abstract-factory/loan/mortgage-loan";
import SACInstallmentCalculator
    from "@/creational/abstract-factory/loan/sac-installment-calculator";
import CarLoan from "@/creational/abstract-factory/loan/car-loan";
import PriceInstallmentCalculator
    from "@/creational/abstract-factory/loan/price-installment-calculator";

export default interface LoanFactory {
    createLoan(amount: number, income: number, installments: number): Loan
    createInstallmentCalculator(): InstallmentCalculator
}

export class MortgageLoanFactory implements LoanFactory {
    createInstallmentCalculator(): InstallmentCalculator {
        return new SACInstallmentCalculator()
    }

    createLoan(amount: number, income: number, installments: number): Loan {
        return MortgageLoan.create(amount, income, installments);
    }
}

export class CarLoanFactory implements LoanFactory {
    createInstallmentCalculator(): InstallmentCalculator {
        return new PriceInstallmentCalculator()
    }

    createLoan(amount: number, income: number, installments: number): Loan {
        return CarLoan.create(amount, income, installments);
    }

}