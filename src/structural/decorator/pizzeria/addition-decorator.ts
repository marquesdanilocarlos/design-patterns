import Pizza from "@/structural/decorator/pizzeria/pizza";

export default abstract class AdditionDecorator extends Pizza {
    
    constructor(protected pizza: Pizza) {
        super();
    }

    abstract getDescription(): string

    abstract getPrice(): number

}