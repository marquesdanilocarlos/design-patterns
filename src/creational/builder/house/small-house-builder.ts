import HouseBuilder from "@/creational/builder/house/house-builder";
import House from "@/creational/builder/house/house";

export default class SmallHouseBuilder implements HouseBuilder{
    private house: House

    constructor() {
        this.house = new House()
    }

    buildDoors(): this {
        this.house.doors = 1
        return this
    }

    buildPool(): this {
        this.house.pool = false
        return this
    }

    buildRoof(): this {
        this.house.roof = 'Wooden Roof'
        return this
    }

    buildWalls(): this {
        this.house.walls = 4
        return this
    }

    buildWindows(): this {
        this.house.windows = 2
        return this
    }

    getResult(): House {
        return this.house;
    }

}