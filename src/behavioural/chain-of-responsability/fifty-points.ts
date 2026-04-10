import Order from "@/behavioural/chain-of-responsability/order";
import CalculatePoints from "@/behavioural/chain-of-responsability/calculate-points";

export default class FiftyPoints implements CalculatePoints {

    constructor(private _next: CalculatePoints) {
    }

    public calculatePoints(order: Order, day: number): number {
        if (order.getAmount() < 50) {
            return this._next.calculatePoints(order, day);
        }

        return Math.floor(order.getAmount() / 4);
    }

    setNext(next: CalculatePoints): void {
        this._next = next;
    }
}