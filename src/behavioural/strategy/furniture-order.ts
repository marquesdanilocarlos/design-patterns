import Order from "@/behavioural/strategy/order";
import Fare from "@/behavioural/strategy/fare";

export default class FurnitureOrder extends Order {
    constructor(
        amount: number,
        fareType: Fare
    ) {
        super(amount, fareType, 'Móveis')
    }
}