import Order from "@/behavioural/chain-of-responsability/order";
import PointsCalculator from "@/behavioural/chain-of-responsability/points-calculator";

test('Deve calcular os pontos ganhos pelo valor do pedido', () => {
    const order = new Order(21);
    const pointsCalculator = new PointsCalculator();

    let points = pointsCalculator.calculateOrderPoints(order, 15);
    expect(points).toBe(2);

    points = pointsCalculator.calculateOrderPoints(order, 16);
    expect(points).toBe(4);

    order.setAmount(100);

    points = pointsCalculator.calculateOrderPoints(order, 15);
    expect(points).toBe(20);

    points = pointsCalculator.calculateOrderPoints(order, 16);
    expect(points).toBe(40);

    order.setAmount(50)
    points = pointsCalculator.calculateOrderPoints(order, 15);
    expect(points).toBe(12);

    order.setAmount(10)
    points = pointsCalculator.calculateOrderPoints(order, 15);
    expect(points).toBe(0);
})