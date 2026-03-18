import Location from "@/creational/factory/location";

export default class Segment {
    constructor(
        private readonly _rideId: string,
        private readonly _from: Location,
        private readonly _to: Location
    ) {}

    getDistance () {
        const earthRadius = 6371;
        const degreesToRadians = Math.PI / 180;
        const deltaLat = (this.to.coord.latitude - this.from.coord.latitude) * degreesToRadians;
        const deltaLon = (this.to.coord.longitude - this.from.coord.longitude) * degreesToRadians;
        const a =
            Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
            Math.cos(this.from.coord.latitude * degreesToRadians) *
            Math.cos(this.to.coord.latitude * degreesToRadians) *
            Math.sin(deltaLon / 2) *
            Math.sin(deltaLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return Math.round(earthRadius * c);
    }

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