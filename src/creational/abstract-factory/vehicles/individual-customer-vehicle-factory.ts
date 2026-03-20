import CustomerVehicleFactory
    from "@/creational/abstract-factory/vehicles/customer-vehicle-factory";
import Customer from "@/creational/abstract-factory/vehicles/customer";
import Vehicle from "@/creational/abstract-factory/vehicles/vehicle";
import IndividualCustomer from "@/creational/abstract-factory/vehicles/individual-customer";
import IndividualCar from "@/creational/abstract-factory/vehicles/individual-car";

export default class IndividualCustomerVehicleFactory implements CustomerVehicleFactory {
    createCustomer(customerName:string): Customer {
        return new IndividualCustomer(customerName)
    }

    createVehicle(vehicleName:string, customer: Customer): Vehicle {
        return new IndividualCar(vehicleName, customer)
    }

}