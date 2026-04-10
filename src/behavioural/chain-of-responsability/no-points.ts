import Order from "@/behavioural/chain-of-responsability/order";
import CalculatePoints from "@/behavioural/chain-of-responsability/calculate-points";

export default class NoPoints implements CalculatePoints {
    private _next!: CalculatePoints

    public calculatePoints(order: Order, day: number): number {
        return 0
    }

    setNext(next: CalculatePoints): void {
        this._next = next;
    }
}