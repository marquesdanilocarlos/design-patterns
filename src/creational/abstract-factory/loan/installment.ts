export default class Installment {
    constructor(
        private readonly _loanId: string,
        private readonly _number: number,
        private readonly _amount: number,
        private readonly _amortization: number,
        private readonly _interest: number,
        private readonly _balance: number
        ) {
    }

    get loanId(): string {
        return this._loanId;
    }

    get number(): number {
        return this._number;
    }

    get amount(): number {
        return this._amount;
    }

    get amortization(): number {
        return this._amortization;
    }

    get interest(): number {
        return this._interest;
    }

    get balance(): number {
        return this._balance;
    }
}