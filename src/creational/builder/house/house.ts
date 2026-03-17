export default class House {
    private _walls!: number
    private _doors!: number
    private _windows!: number
    private _roof!: string
    private _pool!: boolean

    set walls(value: number) {
        this._walls = value;
    }

    set doors(value: number) {
        this._doors = value;
    }

    set windows(value: number) {
        this._windows = value;
    }

    set roof(value: string) {
        this._roof = value;
    }

    set pool(value: boolean) {
        this._pool = value;
    }

    describeHouse() {
        console.log("House description:");
        console.log("Walls: ", this._walls);
        console.log("Doors: ", this._doors);
        console.log("Windows: ", this._windows);
        console.log("Roof: ", this._roof);
        console.log("Swimming pool: ", this._pool);
    }
}