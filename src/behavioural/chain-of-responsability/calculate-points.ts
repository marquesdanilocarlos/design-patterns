import Order from "@/behavioural/chain-of-responsability/order";

export default interface CalculatePoints {
  calculatePoints(order: Order, day: number): number;
  setNext(next: CalculatePoints): void
}