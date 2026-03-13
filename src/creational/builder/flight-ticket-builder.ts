import FlightTicket from "@/creational/builder/flight-ticket";

export default class FlightTicketBuilder {
    airline!: string
    flightCode!: string
    fromAirport!: string
    toAirport!: string
    passengerName!: string
    passengerEmail!: string
    passengerDocument!: string
    passengerGender!: string
    emergencyContactName!: string
    emergencyContactPhone!: string
    seat!: string
    checkedBags!: number
    hasCheckIn!: boolean
    terminal!: string
    gate!: string
    priority!: number

    setFlight(airline: string, flightCode: string): this {
        this.airline = airline
        this.flightCode = flightCode
        return this
    }

    setTrip(from: string, to: string): this {
        this.fromAirport = from
        this.toAirport = to
        return this
    }

    setPassenger(name: string, email: string, document: string, gender: string): this {
        this.passengerName = name
        this.passengerEmail = email
        this.passengerDocument = document
        this.passengerGender = gender
        return this
    }

    setEmergencyContact(name: string, phone: string): this {
        this.emergencyContactName = name
        this.emergencyContactPhone = phone
        return this
    }

    setSeat(seat: string): this {
        this.seat = seat
        return this
    }

    setCheckedBags(checkedBags: number): this {
        this.checkedBags = checkedBags
        return this
    }

    setCheckinInformation(hasCheckIn: boolean, terminal: string, gate: string): this {
        this.hasCheckIn = hasCheckIn
        this.terminal = terminal
        this.gate = gate
        return this
    }

    setPriority(priority: number): this {
        this.priority = priority
        return this
    }

    getFlightTicket(): FlightTicket {
        return new FlightTicket(this)
    }
}
