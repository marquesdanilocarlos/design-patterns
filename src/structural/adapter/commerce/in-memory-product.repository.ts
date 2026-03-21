import ProductRepository from "@/structural/adapter/commerce/product.repository";
import Product from "@/structural/adapter/commerce/product";

export default class InMemoryProductRepository implements ProductRepository {
    private products: Product[] =  [
        new Product(
             1,
            'A',
            100
        ),
        new Product(
            2,
            'B',
            200
        ),
        new Product(
            3,
            'C',
            300
        )
    ]

    async getById(productId: number): Promise<Product> {
        const product = this.products.find(product => product.productId === productId)

        if (!product) {
            throw new Error('Product not found')
        }

        return product
    }
}