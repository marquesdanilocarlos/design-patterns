import CustomerVehicleFactory
    from "@/creational/abstract-factory/vehicles/customer-vehicle-factory";
import Customer from "@/creational/abstract-factory/vehicles/customer";
import Vehicle from "@/creational/abstract-factory/vehicles/vehicle";
import EnterpriseCar from "@/creational/abstract-factory/vehicles/enterprise-car";
import EnterpriseCustomer from "@/creational/abstract-factory/vehicles/enterprise-customer";

export default class EnterpriseCustomerVehicleFactory implements CustomerVehicleFactory {

    createCustomer(customerName:string): Customer {
        return new EnterpriseCustomer(customerName)
    }

    createVehicle(vehicleName:string, customer: Customer): Vehicle {
        return new EnterpriseCar(vehicleName, customer)
    }

}