import Order from "@/behavioural/chain-of-responsability/order";
import CalculatePoints from "@/behavioural/chain-of-responsability/calculate-points";

export default class TwentyPoints implements CalculatePoints {

    constructor(private _next: CalculatePoints) {
    }

    public calculatePoints(order: Order, day: number): number {
        if (order.getAmount() < 20) {
            return this._next.calculatePoints(order, day);
        }

        return Math.floor(order.getAmount() / 10);
    }

    setNext(next: CalculatePoints): void {
        this._next = next;
    }
}