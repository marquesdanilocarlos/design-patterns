import TopPagamentos from "@/structural/adapter/payment/top-pagamentos"
import PaymentGateway from "@/structural/adapter/payment/payment-gateway"

export default class TopPagamentosAdapter implements PaymentGateway {
    private tempCvv?: string | null = null
    private tempCardNumber?: string | null = null

    constructor(private topPagamentos: TopPagamentos) {
    }

    set amount(amount: number) {
        this.topPagamentos.amount = amount
    }

    set cardNumber(cardNumber: string) {
        this.tempCardNumber = cardNumber

        if (this.tempCvv) {
            this.topPagamentos.setCard(cardNumber, this.tempCvv)
        }
    }

    set cvv(cvv: string) {
        this.tempCvv = cvv

        if (this.tempCardNumber) {
            this.topPagamentos.setCard(this.tempCardNumber, cvv)
        }
    }

    set installments(installments: number) {
        this.topPagamentos.installments = installments
    }

    pay(): boolean {
        return this.topPagamentos.pay()
    }

    validateCard(): boolean {
        return true
    }

}