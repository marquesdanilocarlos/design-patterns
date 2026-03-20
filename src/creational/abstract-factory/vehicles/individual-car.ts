import Vehicle from "@/creational/abstract-factory/vehicles/vehicle";
import Customer from "@/creational/abstract-factory/vehicles/customer";

export default class IndividualCar implements Vehicle {
    type: string = 'Individual'

    constructor(private name: string, private customer: Customer) {
    }

    pickUp(): string {
        return `${this.name} picked up by ${this.customer.getName()}`
    }
}