import Order from './order';
import SeventyPoints from "@/behavioural/chain-of-responsability/seventy-points";
import FortyPoints from "@/behavioural/chain-of-responsability/forty-points";
import TwentyPoints from "@/behavioural/chain-of-responsability/twenty-points";
import NoPoints from "@/behavioural/chain-of-responsability/no-points";
import FiftyPoints from "@/behavioural/chain-of-responsability/fifty-points";

export default class PointsCalculator {
  public calculateOrderPoints(order: Order, day: number): number {
    const noPoints = new NoPoints();
    const twentyPoints = new TwentyPoints(noPoints);
    const fortyPoints = new FortyPoints(twentyPoints);
    const fiftyPoints = new FiftyPoints(fortyPoints)
    const seventyPoints = new SeventyPoints(fiftyPoints);


    if (day >= 16 && day <= 31) {
      return seventyPoints.calculatePoints(order, day) * 2;
    }

    return seventyPoints.calculatePoints(order, day);
  }
}
