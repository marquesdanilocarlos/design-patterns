import Loan from "@/creational/abstract-factory/loan/loan";
import Installment from "@/creational/abstract-factory/loan/installment";

export default interface InstallmentCalculator {
    calculate(loan: Loan): Installment[]
}