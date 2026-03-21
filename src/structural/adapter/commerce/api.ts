import express from 'express'
import InMemoryProductRepository from "@/structural/adapter/commerce/in-memory-product.repository";
import GetProduct from "@/structural/adapter/commerce/get-product";

const app = express()

app.get('/products/:productId', async (req, res) => {
    const productId = Number(req.params.productId)
    const productRepository = new InMemoryProductRepository()
    const getProduct = new GetProduct(productRepository)
    const product = await getProduct.execute({ productId })

    return res.json(product)
})

app.listen(3001, () => {
    console.log('Server is running on port 3001')
})