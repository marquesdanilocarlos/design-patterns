import State from "@/behavioural/state/state";
import PendingState from "@/behavioural/state/pending-state";
import PaidState from "@/behavioural/state/paid-state";
import CancelledState from "@/behavioural/state/cancelled-state";
import SentState from "@/behavioural/state/sent-state";


export default class Order {
    private readonly _pending: State
    private readonly _paid: State
    private readonly _cancelled: State
    private readonly _sent: State
    private _actualState: State

    constructor() {
        this._pending = new PendingState(this)
        this._paid = new PaidState(this)
        this._cancelled = new CancelledState(this)
        this._sent = new SentState(this)
        this._actualState = this._pending
    }

    pay(): void {
        this._actualState.pay()
    }

    cancel(): void {
        this._actualState.cancel()
    }

    send(): void {
        this._actualState.send()
    }

    get actualState() {
        return this._actualState;
    }

    set actualState(state: State) {
        this._actualState = state;
    }

    get pending(): State {
        return this._pending;
    }

    get paid(): State {
        return this._paid;
    }

    get cancelled(): State {
        return this._cancelled;
    }

    get sent(): State {
        return this._sent;
    }
}