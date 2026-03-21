import CalculateCheckout from "@/structural/adapter/commerce/calculate-checkout";
import {HttpCatalogGateway} from "@/structural/adapter/commerce/catalog-gateway";
import {AxiosAdapter, FetchAdapter} from "@/structural/adapter/commerce/http-client";

test('Deve calcular o checkout', async () => {
    const input = {
        items: [
            {productId: 1, quantity: 2},
            {productId: 2, quantity: 1},
            {productId: 3, quantity: 4},
        ]
    }
    //const httpClient = new AxiosAdapter()
    const httpClient = new FetchAdapter()
    const catalogGateway = new HttpCatalogGateway(httpClient)
    const calculateCheckout = new CalculateCheckout(catalogGateway)
    const output = await calculateCheckout.execute(input)

    expect(output.total).toBe(1600)
})