import Transport from "@/creational/factory/logistic/transport";

export default class Truck implements Transport {
    deliver(): string {
        return "Entrega por estrada"
    }
}