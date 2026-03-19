import Loan from "@/creational/abstract-factory/loan/loan";
import Installment from "@/creational/abstract-factory/loan/installment";
import InstallmentCalculator from "@/creational/abstract-factory/loan/installment-calculator";
import currency from 'currency.js'

export default class PriceInstallmentCalculator implements InstallmentCalculator {
    calculate(loan: Loan): Installment[] {
        const installments: Installment[] = []
        let balance = currency(loan.amount)
        let rate = (loan.rate / 100) / 12
        let installmentNumber = 1
        const formula = Math.pow(1 + rate, loan.installments)
        let amount = balance.multiply((formula*rate) / (formula - 1))

        while (balance.value > 0.10) {
            let interest = balance.multiply(rate)
            let amortization = amount.subtract(interest)
            balance = balance.subtract(amortization)

            if (balance.value < 2) {
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