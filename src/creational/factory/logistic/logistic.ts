import Transport from "@/creational/factory/logistic/transport";

export default abstract class Logistic {
    abstract createTransport(): Transport

    planDelivery(): string {
        return this.createTransport().deliver()
    }
}