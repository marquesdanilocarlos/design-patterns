import SmallHouseBuilder from "@/creational/builder/house/small-house-builder";
import LargeHouseBuilder from "@/creational/builder/house/large-house-builder";
import HouseDirector from "@/creational/builder/house/house-director";

const smallHouseBuilder = new SmallHouseBuilder()
const firstDirector = new HouseDirector(smallHouseBuilder)
firstDirector.constructHouse()
const smallHouse = smallHouseBuilder.getResult()
smallHouse.describeHouse()

const largeHouseBuilder = new LargeHouseBuilder()
const secondDirector = new HouseDirector(largeHouseBuilder)
secondDirector.constructHouse()
const largeHouse = largeHouseBuilder.getResult()
largeHouse.describeHouse()
