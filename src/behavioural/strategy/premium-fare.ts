import Fare from "@/behavioural/strategy/fare";

export default class PremiumFare implements Fare {
    calculate(amount: number): number {
        return amount * 0.1;
    }

}