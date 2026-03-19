import ApplyForLoan, {ApplyForLoanInput} from "@/creational/abstract-factory/loan/apply-for-loan";
import GetLoan from "@/creational/abstract-factory/loan/get-loan";
import {RepositoryFactoryMemory} from "@/creational/abstract-factory/loan/repository-factory";
import {MortgageLoanFactory} from "@/creational/abstract-factory/loan/loan-factory";

test('Deve solicitar um financiamento imobiliário', async () => {
    const repositoryFactory = new RepositoryFactoryMemory()
    const mortgageLoanFactory = new MortgageLoanFactory()
    const appyForLoan = new ApplyForLoan(repositoryFactory, mortgageLoanFactory)
    const input: ApplyForLoanInput = {
        amount: 100000,
        income: 10000,
        installments: 240,
    }
    const outputApplyForLoan = await appyForLoan.execute(input)
    const getLoan = new GetLoan(repositoryFactory)
    const outputGetLoan = await getLoan.execute(outputApplyForLoan)
    expect(outputGetLoan.amount).toBe(100000)
    expect(outputGetLoan.income).toBe(10000)
    expect(outputGetLoan.installments).toHaveLength(240)
    expect(outputGetLoan.installments.at(0)?.number).toBe(1)
    expect(outputGetLoan.installments.at(0)?.amount).toBe(1250)
    expect(outputGetLoan.installments.at(0)?.amortization).toBe(416.67)
    expect(outputGetLoan.installments.at(0)?.interest).toBe(833.33)
    expect(outputGetLoan.installments.at(0)?.balance).toBe(99583.33)
    expect(outputGetLoan.installments.at(239)?.number).toBe(240)
    expect(outputGetLoan.installments.at(239)?.amount).toBe(420.14)
    expect(outputGetLoan.installments.at(239)?.amortization).toBe(416.67)
    expect(outputGetLoan.installments.at(239)?.interest).toBe(3.47)
    expect(outputGetLoan.installments.at(239)?.balance).toBe(0)
})