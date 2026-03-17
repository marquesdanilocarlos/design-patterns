import FlightTicketBuilder from "@/creational/builder/flight-ticket/flight-ticket-builder";

test('Deve criar uma passagem aérea', () => {
    const flightTicketBuilder = new FlightTicketBuilder()
    const flightTicket = flightTicketBuilder.setFlight('Azul', '9876D2A')
        .setTrip('FLN', 'GRU')
        .setPassenger('John Doe', 'john.doe@gmail.com', '111.111.111-11', 'M')
        .setEmergencyContact('Bob Martin', '5561999999999')
        .setSeat('8A')
        .setCheckedBags(2)
        .setCheckinInformation(true, '1', '4A')
        .setPriority(5)
        .getFlightTicket()

    expect(flightTicket.passengerName).toBe('John Doe')
    expect(flightTicket.seat).toBe('8A')
})
