import Location from "@/creational/factory/location";
import * as crypto from "node:crypto";
import Segment from "@/creational/factory/segment";

export default class Ride {
    private _rideId: string
    private _lastLocation: Location

    constructor(latitude: number, longitude: number, date: Date) {
        this._rideId = crypto.randomUUID()
        this._lastLocation = new Location(latitude, longitude, date)
    }

    updateLocation(newLocation: Location): void {
        this._lastLocation = newLocation
    }

    calculateFare(segments: Segment[]) {
        let total = 0
        for (const segment of segments) {
            const distance = segment.getDistance()
            total += distance * 4
        }
        return total
    }

    get rideId(): string {
        return this._rideId;
    }

    get lastLocation(): Location {
        return this._lastLocation;
    }
}