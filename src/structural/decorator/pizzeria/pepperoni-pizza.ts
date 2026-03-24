import Pizza from "@/structural/decorator/pizzeria/pizza";

export default class PepperoniPizza extends Pizza {
    constructor() {
        super()
        this.description = 'Deliciosa pizza de calabresa'
    }

    getDescription(): string {
        return this.description;
    }

    getPrice(): number {
        return 25;
    }

}