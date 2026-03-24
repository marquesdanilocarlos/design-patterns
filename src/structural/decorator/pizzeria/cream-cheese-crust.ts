import AdditionDecorator from "@/structural/decorator/pizzeria/addition-decorator";

export default class CreamCheeseCrust extends AdditionDecorator {
    getDescription(): string {
        return `${this.pizza.getDescription()} + borda de requeijão`;
    }

    getPrice(): number {
        return this.pizza.getPrice() + 8.50;
    }

}