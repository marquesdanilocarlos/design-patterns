import Fare from "@/behavioural/strategy/fare";

export default class CommonFare implements Fare {
    calculate(amount: number): number {
        return amount * 0.05;
    }

}