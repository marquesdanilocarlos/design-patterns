export type PagFacilProps = {
    amount: number;
    installments: number;
    cardNumber: string;
    cvv: string;
};

export default class PagFacil {
    constructor(private readonly props: PagFacilProps) {}

    public get amount(): number {
        return this.props.amount;
    }

    public get installments(): number {
        return this.props.installments;
    }

    public get cardNumber(): string {
        return this.props.cardNumber;
    }

    public get cvv(): string {
        return this.props.cvv;
    }

    public set amount(amount: number) {
        this.props.amount = amount;
    }

    public set installments(installmentsNumber: number) {
        this.props.installments = installmentsNumber;
    }

    public set cardNumber(number: string) {
        this.props.cardNumber = number;
    }

    public set cvv(number: string) {
        this.props.cvv = number;
    }

    public validateCard(): boolean {
        return (
            this.cardNumber.trim() !== "" &&
            this.cvv.trim() !== "" &&
            this.cvv.length === 3
        );
    }

    public pay(): boolean {
        console.log("Pagamento realizado via PagFacil");
        return true;
    }
}