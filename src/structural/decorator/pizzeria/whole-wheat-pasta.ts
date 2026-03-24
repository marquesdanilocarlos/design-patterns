import AdditionDecorator from "@/structural/decorator/pizzeria/addition-decorator";

export default class WholeWheatPasta extends AdditionDecorator {
    getDescription(): string {
        return `${this.pizza.getDescription()} + massa integral`;
    }

    getPrice(): number {
        return this.pizza.getPrice() + 5;
    }

}