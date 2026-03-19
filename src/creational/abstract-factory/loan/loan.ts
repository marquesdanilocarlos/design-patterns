export default abstract class Loan {
    protected abstract _rate: number

    constructor(
        private readonly _loanId: string,
        private readonly _amount: number,
        private readonly _income: number,
        private readonly _installments: number,
        private readonly _type: string
    ) {
    }

    static create(amount: number, income: number, installments: number) {
        throw new Error('This method is abstract')
    }

    get loanId(): string {
        return this._loanId;
    }

    get amount(): number {
        return this._amount;
    }

    get income(): number {
        return this._income;
    }

    get installments(): number {
        return this._installments;
    }

    get type(): string {
        return this._type;
    }

    get rate(): number {
        return this._rate;
    }
}