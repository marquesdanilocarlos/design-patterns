import {ProductDTO} from "@/structural/adapter/commerce/catalog-gateway";
import Item from "@/structural/adapter/commerce/item";

export default class Order {
    private items: Item[]

    constructor() {
        this.items = []
    }

    addProduct(product: ProductDTO, quantity: number) {
        this.items.push(
            new Item(product.productId, product.price, quantity)
        )
    }

    getTotal(): number {
        return this.items.reduce((total, item) => total + item.getTotal(), 0)
    }
}