import CatalogGateway from "@/structural/adapter/commerce/catalog-gateway";
import Order from "@/structural/adapter/commerce/order";

export type CalculateCheckoutInput = {
    items: {
        productId: number
        quantity: number
    }[]
}

export type CalculateCheckoutOutput = {
    total: number
}

export default class CalculateCheckout {
    constructor(private catalogGateway: CatalogGateway) {
    }

    async execute(input: CalculateCheckoutInput): Promise<CalculateCheckoutOutput> {
        const order = new Order()
        for (const item of input.items) {
            const product = await this.catalogGateway.getProduct(item.productId)
            order.addProduct(product, item.quantity)
        }

        return {
            total: order.getTotal()
        }
    }
}