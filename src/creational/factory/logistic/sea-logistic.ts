import Logistic from "@/creational/factory/logistic/logistic";
import Transport from "@/creational/factory/logistic/transport";
import Ship from "@/creational/factory/logistic/ship";

export default class SeaLogistic extends Logistic {
    createTransport(): Transport {
        return new Ship()
    }

    planDelivery(): string {
        return "Entrega por água"
    }

}