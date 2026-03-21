import {HttpClient} from "@/structural/adapter/commerce/http-client";

export type ProductDTO = {
    productId: number
    description: string
    price: number
}

export default interface CatalogGateway {
    getProduct(productId: number): Promise<ProductDTO>
}

export class HttpCatalogGateway implements CatalogGateway {
    constructor(private httpClient: HttpClient) {
    }

    async getProduct(productId: number): Promise<ProductDTO> {
        try {
            return await this.httpClient.get(`http://localhost:3001/products/${productId}`)
        } catch (error) {
            throw new Error(`Product not found: ${productId}`)
        }
    }
}