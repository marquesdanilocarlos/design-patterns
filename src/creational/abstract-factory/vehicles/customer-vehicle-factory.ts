import Customer from "@/creational/abstract-factory/vehicles/customer";
import Vehicle from "@/creational/abstract-factory/vehicles/vehicle";

export default interface CustomerVehicleFactory {
    createCustomer(customerName: string): Customer
    createVehicle(vehicleName: string, customer: Customer): Vehicle
}