import PepperoniPizza from "@/structural/decorator/pizzeria/pepperoni-pizza";
import CreamCheeseCrust from "@/structural/decorator/pizzeria/cream-cheese-crust";
import CheesePizza from "@/structural/decorator/pizzeria/cheese-pizza";
import ChickenPizza from "@/structural/decorator/pizzeria/chicken-pizza";
import WholeWheatPasta from "@/structural/decorator/pizzeria/whole-wheat-pasta";

test('Deve criar uma pizza de calabresa', () => {
    const pepperoniPizza = new PepperoniPizza();

    expect(pepperoniPizza.getDescription()).toBe('Deliciosa pizza de calabresa')
})

test('Deve criar uma pizza de frango com borda de requeijão', () => {
    const pepperoniPizza = new ChickenPizza();
    const creamCheeseCrust = new CreamCheeseCrust(pepperoniPizza);

    expect(creamCheeseCrust.getDescription()).toBe('Deliciosa pizza de frango + borda de requeijão')
})

test('Deve criar uma pizza de queijo com massa integral e borda de requeijão', () => {
    const pepperoniPizza = new CheesePizza();
    const wholeWheatPasta = new WholeWheatPasta(pepperoniPizza);
    const creamCheeseCrust = new CreamCheeseCrust(wholeWheatPasta);

    expect(creamCheeseCrust.getDescription()).toBe('Deliciosa pizza de queijo + massa integral + borda de requeijão')
})