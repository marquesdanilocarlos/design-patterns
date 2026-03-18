export default class Coordinate {
    constructor(
        private readonly _latitude: number,
        private readonly _longitude: number
    ) {
        if (_latitude < -90 || _latitude > 90) {
            throw new Error('Latitude inválida')
        }
        if (_longitude < -180 || _longitude > 18) {
            throw new Error('Longitude inválida')
        }
    }

    get latitude(): number {
        return this._latitude;
    }

    get longitude(): number {
        return this._longitude;
    }
}