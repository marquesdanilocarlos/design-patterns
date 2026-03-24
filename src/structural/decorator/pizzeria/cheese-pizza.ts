import Pizza from "@/structural/decorator/pizzeria/pizza";

export default class CheesePizza extends Pizza {
    constructor() {
        super()
        this.description = 'Deliciosa pizza de queijo'
    }

    getDescription(): string {
        return this.description;
    }

    getPrice(): number {
        return 22;
    }

}