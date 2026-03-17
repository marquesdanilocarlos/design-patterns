import House from "@/creational/builder/house/house";

export default interface HouseBuilder {
    buildWalls(): void
    buildDoors(): void
    buildWindows(): void
    buildRoof(): void
    buildPool(): void
    getResult(): House
}