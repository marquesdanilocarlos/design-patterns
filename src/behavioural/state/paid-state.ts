import State from "@/behavioural/state/state";
import Order from "@/behavioural/state/order";

export default class PaidState implements State {

    constructor(private _order: Order) {
    }

    cancel(): void {
        this._order.actualState = this._order.cancelled
    }

    pay(): void {
        throw new Error('O pedido não pode ser pago.')
    }

    send(): void {
        this._order.actualState = this._order.sent
    }

}