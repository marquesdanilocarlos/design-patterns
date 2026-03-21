import Product from "@/structural/adapter/commerce/product";

export default interface ProductRepository {
    getById(productId: number): Promise<Product>
}