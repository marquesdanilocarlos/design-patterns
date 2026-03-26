import {Order} from "@/structural/facade/sales/order";
import {Payment} from "@/structural/facade/sales/payment";
import {OrderEmail} from "@/structural/facade/sales/order-email";
import {Customer} from "@/structural/facade/customer";
import {Product} from "@/structural/facade/product";
import {CreditCardPayment} from "@/structural/facade/sales/credit-card-payment";
import {BankSlipPayment} from "@/structural/facade/sales/bank-slip-payment";

export default class SaleFacade {
    private readonly order: Order
    private payment!: Payment
    private readonly email: OrderEmail

    constructor(
        private readonly customer: Customer
    ) {
        this.order = new Order(this.customer)
        this.email = new OrderEmail(this.order)
    }

    addProduct(product: Product): void {
        this.order.addProduct(product)
    }

    creditOrder(): {status: boolean, message: string} {
        this.payment = new CreditCardPayment(this.order)
        const paymentProcess = this.payment.processPayment()
        const message =  paymentProcess
            ? this.email.sendEmail('Pedido realizado com sucesso via cartão!')
            : this.email.sendEmail('Erro ao processar o pagamento via cartão!')

        return {status: paymentProcess, message}
    }

    bankSlipOrder(): {status: boolean, message: string} {
        this.payment = new BankSlipPayment(this.order)
        const paymentProcess = this.payment.processPayment()
        const message =  paymentProcess
            ? this.email.sendEmail('Pedido realizado com sucesso via boleto!')
            : this.email.sendEmail('Erro ao processar o pagamento via boleto!')

        return {status: paymentProcess, message}
    }
}