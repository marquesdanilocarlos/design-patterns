import Vehicle from "@/creational/abstract-factory/vehicles/vehicle";
import Customer from "@/creational/abstract-factory/vehicles/customer";

export default class EnterpriseCar implements Vehicle {
    type: string = 'Empresarial'

    constructor(private name: string, private customer: Customer) {
    }

    pickUp(): string {
        return `${this.name} picked up by ${this.customer.getName()}`
    }
}