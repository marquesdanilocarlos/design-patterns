import {Customer} from "@/structural/facade/customer";
import {Product} from "@/structural/facade/product";
import {BankSlipPayment} from "@/structural/facade/sales/bank-slip-payment";
import {OrderEmail} from "@/structural/facade/sales/order-email";
import {Order} from "@/structural/facade/sales/order";
import SaleFacade from "@/structural/facade/sales/sale-facade";

test('Deve criar um pedido e realizar pagamento', () => {
    const customer = new Customer('John Doe', '123.456.789-00', 'john.doe@example.com')
    const product1 = new Product('Product 1', 'Description 1', 100)
    const product2 = new Product('Product 2', 'Description 2', 200)
    const product3 = new Product('Product 3', 'Description 3', 300)

    const order = new Order(customer)
    order.addProduct(product1)
    order.addProduct(product2)
    order.addProduct(product3)

    const payment = new BankSlipPayment(order)
    const email = new OrderEmail(order)

    expect(payment.processPayment()).toBeTruthy()
    expect(email.sendEmail('Pedido realizado com sucesso!')).toBe(`Email sent to ${customer.getEmail()}. Pedido realizado com sucesso!`)
})

test('Deve criar um pedido e realizar o pagamento via boleto com facade', () => {
    const customer = new Customer('John Doe', '123.456.789-00', 'john.doe@example.com')
    const saleFacade = new SaleFacade(customer)
    const product1 = new Product('Product 1', 'Description 1', 100)
    const product2 = new Product('Product 2', 'Description 2', 200)
    const product3 = new Product('Product 3', 'Description 3', 300)

    saleFacade.addProduct(product1)
    saleFacade.addProduct(product2)
    saleFacade.addProduct(product3)

    const payment = saleFacade.bankSlipOrder()
    expect(payment).toEqual({
        status: true,
        message: `Email sent to ${customer.getEmail()}. Pedido realizado com sucesso via boleto!`
    })
})

test('Deve criar um pedido e realizar o pagamento via cartão com facade', () => {
    const customer = new Customer('John Doe', '123.456.789-00', 'john.doe@example.com')
    const saleFacade = new SaleFacade(customer)
    const product1 = new Product('Product 1', 'Description 1', 100)
    const product2 = new Product('Product 2', 'Description 2', 200)
    const product3 = new Product('Product 3', 'Description 3', 300)

    saleFacade.addProduct(product1)
    saleFacade.addProduct(product2)
    saleFacade.addProduct(product3)

    const payment = saleFacade.creditOrder()
    expect(payment).toEqual({
        status: true,
        message: `Email sent to ${customer.getEmail()}. Pedido realizado com sucesso via cartão!`
    })
})