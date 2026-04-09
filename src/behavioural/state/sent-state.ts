import State from "@/behavioural/state/state";
import Order from "@/behavioural/state/order";

export default class SentState implements State {

    constructor(private _order: Order) {
    }

    cancel(): void {
        throw new Error('O pedido já foi enviado e não pode ser cancelado.')
    }

    pay(): void {
        throw new Error('O pedido já foi enviado e não pode ser pago.')
    }

    send(): void {
        throw new Error('O pedido já foi enviado.')
    }

}