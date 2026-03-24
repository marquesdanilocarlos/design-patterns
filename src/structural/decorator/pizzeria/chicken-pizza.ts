import Pizza from "@/structural/decorator/pizzeria/pizza";

export default class ChickenPizza extends Pizza {
    constructor() {
        super()
        this.description = 'Deliciosa pizza de frango'
    }

    getDescription(): string {
        return this.description;
    }

    getPrice(): number {
        return 19;
    }

}