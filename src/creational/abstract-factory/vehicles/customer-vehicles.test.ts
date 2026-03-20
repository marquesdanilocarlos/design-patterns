import IndividualCustomerVehicleFactory
    from "@/creational/abstract-factory/vehicles/individual-customer-vehicle-factory";
import EnterpriseCustomerVehicleFactory
    from "@/creational/abstract-factory/vehicles/enterprise-customer-vehicle-factory";

test('Deve criar cliente e veículo individuais', () => {
    const vehicleFactory = new IndividualCustomerVehicleFactory()
    const customer = vehicleFactory.createCustomer('John Doe')
    const vehicle = vehicleFactory.createVehicle('Palio', customer)
    const pickedUp = vehicle.pickUp()

    expect(customer.name).toBe('John Doe')
    expect(pickedUp).toBe('Palio picked up by John Doe')
    expect(vehicle.type).toBe('Individual')
})

test('Deve criar cliente e veículo empresariais', () => {
    const vehicleFactory = new EnterpriseCustomerVehicleFactory()
    const customer = vehicleFactory.createCustomer('Danilera')
    const vehicle = vehicleFactory.createVehicle('Onix', customer)
    const pickedUp = vehicle.pickUp()

    expect(customer.name).toBe('Danilera')
    expect(pickedUp).toBe('Onix picked up by Danilera')
    expect(vehicle.type).toBe('Empresarial')
})