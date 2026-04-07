import EletronicOrder from "@/behavioural/strategy/eletronic-order";
import FurnitureOrder from "@/behavioural/strategy/furniture-order";
import CommonFare from "@/behavioural/strategy/common-fare";
import PremiumFare from "@/behavioural/strategy/premium-fare";


test('Deve realizar o cálculo de frete de um pedido', () => {
    const commonFare = new CommonFare()
    const eletronicOrderCommonFare = new EletronicOrder(100, commonFare);
    const eletronicOrderPremiumFare = new EletronicOrder(100, new PremiumFare());

    expect(eletronicOrderCommonFare.calculateFare()).toBe(5);
    expect(eletronicOrderPremiumFare.calculateFare()).toBe(10);

    const furnitureOrder = new FurnitureOrder(100, commonFare);
    expect(furnitureOrder.calculateFare()).toBe(5);
})