import Transport from "@/creational/factory/logistic/transport";

export default class Ship implements Transport {
    deliver(): string {
        return "Entrega por água"
    }
}