import Order from "@/behavioural/chain-of-responsability/order";
import CalculatePoints from "@/behavioural/chain-of-responsability/calculate-points";

export default class SeventyPoints implements CalculatePoints {

    constructor(private _next: CalculatePoints) {
    }

    public calculatePoints(order: Order, day: number): number {
        if (order.getAmount() < 70) {
            return this._next.calculatePoints(order, day);
        }

        return Math.floor(order.getAmount() / 5);
    }

    setNext(next: CalculatePoints): void {
        this._next = next;
    }
}