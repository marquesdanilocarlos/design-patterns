export type TopPagamentosProps = {
    amount: number;
    installments: number;
    cardNumber: string;
    cvv: string;
};

export default class TopPagamentos {
    constructor(private props: TopPagamentosProps) {}

    public get amount(): number {
        return this.props.amount;
    }

    public set amount(amount: number) {
        this.props.amount = amount;
    }

    public get installments(): number {
        return this.props.installments;
    }

    public set installments(installments: number) {
        this.props.installments = installments;
    }

    public get cardNumber(): string {
        return this.props.cardNumber;
    }

    public setCard(cardNumber: string, cvv: string) {
        this.props.cardNumber = cardNumber;
        this.props.cvv = cvv;
    }

    public get cvv(): string {
        return this.props.cvv;
    }

    public pay(): boolean {
        console.log("Pagamento realizado via TopPagamentos");
        return true;
    }
}