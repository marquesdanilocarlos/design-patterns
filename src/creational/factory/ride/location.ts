import Coordinate from "@/creational/factory/ride/coordinate";

export default class Location {
    private _coord: Coordinate

    constructor(
        latitude: number,
        longitude: number,
        readonly date: Date
    ) {
        this._coord = new Coordinate(latitude, longitude)
    }

    get coord(): Coordinate {
        return this._coord;
    }

}