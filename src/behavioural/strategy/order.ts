import Fare from "@/behavioural/strategy/fare";

export default abstract class Order {
    constructor(
        private _amount: number,
        private _fare: Fare,
        private _section: string,
    ) {
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get section(): string {
        return this._section;
    }

    set section(value: string) {
        this._section = value;
    }

    calculateFare(): number {
        return this._fare.calculate(this.amount)
    }
}