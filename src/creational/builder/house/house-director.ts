import HouseBuilder from "@/creational/builder/house/house-builder";

export default class HouseDirector {
    constructor(private builder: HouseBuilder) {
    }

    constructHouse() {
        this.builder.buildWalls();
        this.builder.buildDoors();
        this.builder.buildWindows();
        this.builder.buildRoof();
        this.builder.buildPool();
    }
}