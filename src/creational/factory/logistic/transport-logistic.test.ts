import RoadLogistic from "@/creational/factory/logistic/road-logistic";
import SeaLogistic from "@/creational/factory/logistic/sea-logistic";

test('Deve criar um transporte de logística rodoviária', () => {
    const roadLogistic = new RoadLogistic()
    expect(roadLogistic.planDelivery()).toBe('Entrega por estrada')
})

test('Deve criar um transporte de logística marítima', () => {
    const maritimeLogistic = new SeaLogistic()
    expect(maritimeLogistic.planDelivery()).toBe('Entrega por água')
})