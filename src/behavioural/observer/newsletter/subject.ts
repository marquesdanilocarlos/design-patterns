import Observer from "@/behavioural/observer/newsletter/observer";

export default interface Subject {
    register(observer: Observer): void;
    remove(observer: Observer): void;
    notifyObservers(): void;
}