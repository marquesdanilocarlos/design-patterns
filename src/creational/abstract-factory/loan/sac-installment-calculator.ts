import Loan from "@/creational/abstract-factory/loan/loan";
import Installment from "@/creational/abstract-factory/loan/installment";
import InstallmentCalculator from "@/creational/abstract-factory/loan/installment-calculator";
import currency from 'currency.js'

export default class SACInstallmentCalculator implements InstallmentCalculator {
    calculate(loan: Loan): Installment[] {
        const installments: Installment[] = []
        let balance = currency(loan.amount)
        let rate = (loan.rate / 100) / 12
        let installmentNumber = 1
        let amortization = currency(balance.value / loan.installments)
        while (balance.value > 0.10) {
            let interest = currency(balance.value * rate)
            let updatedBalance = currency(balance.value + interest.value)
            let amount = currency(interest.value + amortization.value)
            balance = currency(updatedBalance.value - amount.value)

            if (balance.value < 0.10) {
                balance = currency(0)
            }

            installments.push(new Installment(
                loan.loanId,
                installmentNumber,
                amount.value,
                amortization.value,
                interest.value,
                balance.value
            ))
            installmentNumber++
        }


        return installments
    }
}