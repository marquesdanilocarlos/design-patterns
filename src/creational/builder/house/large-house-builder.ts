import HouseBuilder from "@/creational/builder/house/house-builder";
import House from "@/creational/builder/house/house";

export default class LargeHouseBuilder implements HouseBuilder{
    private house: House

    constructor() {
        this.house = new House()
    }

    buildDoors(): this {
        this.house.doors = 5
        return this
    }

    buildPool(): this {
        this.house.pool = true
        return this
    }

    buildRoof(): this {
        this.house.roof = 'Concrete Roof'
        return this
    }

    buildWalls(): this {
        this.house.walls = 12
        return this
    }

    buildWindows(): this {
        this.house.windows = 4
        return this
    }

    getResult(): House {
        return this.house;
    }

}