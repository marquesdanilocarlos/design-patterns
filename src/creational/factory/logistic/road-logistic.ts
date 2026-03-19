import Logistic from "@/creational/factory/logistic/logistic";
import Transport from "@/creational/factory/logistic/transport";
import Truck from "@/creational/factory/logistic/truck";

export default class RoadLogistic extends Logistic {
    createTransport(): Transport {
        return new Truck()
    }
}