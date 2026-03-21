export default class Item {
    constructor(
        public productId: number,
        public price: number,
        public quantity: number
    ) {}

    getTotal(): number {
        return this.price * this.quantity
    }
}