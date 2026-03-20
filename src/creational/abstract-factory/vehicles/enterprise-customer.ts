import Customer from "@/creational/abstract-factory/vehicles/customer";

export default class EnterpriseCustomer implements Customer {
    constructor(public readonly name: string) {
    }

    getName(): string {
        return this.name;
    }
}