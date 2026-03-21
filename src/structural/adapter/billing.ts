import PaymentGateway from "@/structural/adapter/payment-gateway";

type BillingProps = {
    gateway: PaymentGateway;
};

export default class Billing {
    constructor(private props: BillingProps) {}

    public get gateway(): PaymentGateway {
        return this.props.gateway;
    }

    public set gateway(gateway: PaymentGateway) {
        this.props.gateway = gateway;
    }

    public set amount(amount: number) {
        this.gateway.amount = amount;
    }

    public set installments(number: number) {
        this.gateway.installments = number;
    }

    public set cardNumber(number: string) {
        this.gateway.cardNumber = number;
    }

    public set cvv(cvv: string) {
        this.gateway.cvv = cvv;
    }

    public pay(): boolean {
        if (this.gateway.validateCard()) {
            return this.gateway.pay();
        }

        return false;
    }
}