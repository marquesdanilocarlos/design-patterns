import Location from "@/creational/factory/ride/location";
import Segment from "@/creational/factory/ride/segment";

export default abstract class Ride {
    private _lastLocation: Location

    constructor(private _rideId: string, latitude: number, longitude: number, date: Date) {
        //this._rideId = crypto.randomUUID()
        this._lastLocation = new Location(latitude, longitude, date)
    }

    updateLocation(newLocation: Location): void {
        this._lastLocation = newLocation
    }

    abstract calculateFare(segments: Segment[]): number

    abstract createSegment(from: Location, to: Location): Segment

    get rideId(): string {
        return this._rideId;
    }

    get lastLocation(): Location {
        return this._lastLocation;
    }
}