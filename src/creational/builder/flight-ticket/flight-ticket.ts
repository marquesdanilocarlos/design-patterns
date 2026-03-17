import FlightTicketBuilder from "@/creational/builder/flight-ticket/flight-ticket-builder";

export default class FlightTicket {
    private readonly _airline: string
    private readonly _fromAirport: string
    private readonly _toAirport: string
    private readonly _flightCode: string
    private readonly _passengerName: string
    private readonly _passengerEmail: string
    private readonly _passengerDocument: string
    private readonly _passengerGender: string
    private readonly _emergencyContactName: string
    private readonly _emergencyContactPhone: string
    private readonly _seat: string
    private readonly _checkedBags: number
    private readonly _hasCheckIn: boolean
    private readonly _terminal: string
    private readonly _gate: string
    private readonly _priority: number

    constructor(builder: FlightTicketBuilder) {
        this._airline = builder.airline
        this._fromAirport = builder.fromAirport
        this._toAirport = builder.toAirport
        this._flightCode = builder.flightCode
        this._passengerName = builder.passengerName
        this._passengerEmail = builder.passengerEmail
        this._passengerDocument = builder.passengerDocument
        this._passengerGender = builder.passengerGender
        this._emergencyContactName = builder.emergencyContactName
        this._emergencyContactPhone = builder.emergencyContactPhone
        this._seat = builder.seat
        this._checkedBags = builder.checkedBags
        this._hasCheckIn = builder.hasCheckIn
        this._terminal = builder.terminal
        this._gate = builder.gate
        this._priority = builder.priority
    }


    get airline(): string {
        return this._airline;
    }

    get fromAirport(): string {
        return this._fromAirport;
    }

    get toAirport(): string {
        return this._toAirport;
    }

    get flightCode(): string {
        return this._flightCode;
    }

    get passengerName(): string {
        return this._passengerName;
    }

    get passengerEmail(): string {
        return this._passengerEmail;
    }

    get passengerDocument(): string {
        return this._passengerDocument;
    }

    get passengerGender(): string {
        return this._passengerGender;
    }

    get emergencyContactName(): string {
        return this._emergencyContactName;
    }

    get emergencyContactPhone(): string {
        return this._emergencyContactPhone;
    }

    get seat(): string {
        return this._seat;
    }

    get checkedBags(): number {
        return this._checkedBags;
    }

    get hasCheckIn(): boolean {
        return this._hasCheckIn;
    }

    get terminal(): string {
        return this._terminal;
    }

    get gate(): string {
        return this._gate;
    }

    get priority(): number {
        return this._priority;
    }
}
