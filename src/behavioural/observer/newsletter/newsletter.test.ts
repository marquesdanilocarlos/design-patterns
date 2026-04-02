import Newsletter from "@/behavioural/observer/newsletter/newsletter"
import Supplier from "@/behavioural/observer/newsletter/supplier"
import Employee from "@/behavioural/observer/newsletter/employee"
import Customer from "@/behavioural/observer/newsletter/customer"

test('Deve enviar um email para os observers inscritos', () => {
    const newsletter = new Newsletter()
    const customer = new Customer('Customer', 'customer@email.com', newsletter)
    const employee = new Employee('Employee', 'employee@email.com', newsletter)
    const supplier = new Supplier('Supplier', 'supplier@email.com', newsletter)

    const spyCustomer = jest.spyOn(customer, 'update')
    const spyEmployee = jest.spyOn(employee, 'update')
    const spySupplier = jest.spyOn(supplier, 'update')

    newsletter.addMessage('Hello World');

    expect(spyCustomer).toHaveBeenCalledWith('Hello World')
    expect(spyEmployee).toHaveBeenCalledWith('Hello World')
    expect(spySupplier).toHaveBeenCalledWith('Hello World')
})