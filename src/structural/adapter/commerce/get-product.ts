import ProductRepository from "@/structural/adapter/commerce/product.repository";

export type GetProductInput = {
    productId: number
}

export type GetProductOutput = {
    productId: number
    description: string
    price: number
}

export default class GetProduct {
    constructor(private productRepository: ProductRepository) {

    }

    async execute(input: GetProductInput): Promise<GetProductOutput> {
        const product = await this.productRepository.getById(input.productId)

        return {
            productId: product.productId,
            description: product.description,
            price: product.price
        }
    }
}