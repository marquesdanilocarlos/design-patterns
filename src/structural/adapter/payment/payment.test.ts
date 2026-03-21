import PagFacil from "@/structural/adapter/payment/pag-facil";
import Billing from "@/structural/adapter/payment/billing";
import TopPagamentosAdapter from "@/structural/adapter/payment/top-pagamentos.adapter";
import TopPagamentos from "@/structural/adapter/payment/top-pagamentos";
import PagFacilAdapter from "@/structural/adapter/payment/pag-facil.adapter";

test('Deve realizar um pagamento com PagFacil implementando diretamente a classe concreta', () => {
    const pagFacil = new PagFacil({
        amount: 100,
        installments: 1,
        cardNumber: "1234567890123456",
        cvv: "123"
    })

    const billing = new Billing({
        gateway: pagFacil
    })

    expect(billing.pay()).toBe(true)
})

test('Deve realizar um pagamento com um adapter de TopPagamentos', () => {
    const topPagamentos = new TopPagamentos({
        amount: 100,
        installments: 1,
        cardNumber: "1234567890123456",
        cvv: "123"
    })
    const topPagamentosAdapter = new TopPagamentosAdapter(topPagamentos)

    const billing = new Billing({
        gateway: topPagamentosAdapter
    })

    expect(billing.pay()).toBe(true)
})

test('Deve criar uma cobrança com adapter de PagFacil, mas mudar o gateway para TopPagamentos em tempo de execução', () => {

    const pagFacilAdapter = new PagFacilAdapter({
        amount: 100,
        installments: 1,
        cardNumber: "1234567890123456",
        cvv: "123"
    })

    const billing = new Billing({
        gateway: pagFacilAdapter
    })

    const topPagamentos = new TopPagamentos({
        amount: 100,
        installments: 1,
        cardNumber: "1234567890123456",
        cvv: "123"
    })

    billing.gateway = new TopPagamentosAdapter(topPagamentos)

    expect(billing.pay()).toBe(true)
})