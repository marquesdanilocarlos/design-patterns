import Order from "@/behavioural/state/order";
import PendingState from "@/behavioural/state/pending-state";
import PaidState from "@/behavioural/state/paid-state";
import CancelledState from "@/behavioural/state/cancelled-state";
import SentState from "@/behavioural/state/sent-state";

test('Não deve despachar um pedido caso seu status não seja pago', () => {
    const order = new Order()
    expect(order.actualState).toBeInstanceOf(PendingState)
    expect(() => order.send()).toThrow('O pedido não pode ser enviado.')
})


test('Deve criar um pedido, pagar e cancelar', () => {
    const order = new Order()

    order.pay()
    expect(order.actualState).toBeInstanceOf(PaidState)

    order.cancel()
    expect(order.actualState).toBeInstanceOf(CancelledState)

    expect(() => order.send()).toThrow('O pedido já foi cancelado e não pode ser enviado.')
})

test('Deve criar um pedido, pagar e despachar', () => {
    const order = new Order()

    order.pay()
    expect(order.actualState).toBeInstanceOf(PaidState)

    order.send()
    expect(order.actualState).toBeInstanceOf(SentState)

    expect(() => order.cancel()).toThrow('O pedido já foi enviado e não pode ser cancelado.')
})