import Location from "@/creational/factory/location";

export default abstract class Segment {
    constructor(
        private readonly _rideId: string,
        private readonly _from: Location,
        private readonly _to: Location
    ) {}

    get rideId(): string {
        return this._rideId;
    }

    get from(): Location {
        return this._from;
    }

    get to(): Location {
        return this._to;
    }
}