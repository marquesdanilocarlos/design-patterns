import State from "@/behavioural/state/state";
import Order from "@/behavioural/state/order";

export default class PendingState implements State {

    constructor(private _order: Order) {
    }

    cancel(): void {
        this._order.actualState = this._order.cancelled
    }

    pay(): void {
        this._order.actualState = this._order.paid
    }

    send(): void {
        throw new Error('O pedido não pode ser enviado.')
    }

}