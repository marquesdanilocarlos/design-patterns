import Observer from "@/behavioural/observer/newsletter/observer";
import Subject from "@/behavioural/observer/newsletter/subject";

export default class Newsletter implements Subject {
    private observers: Observer[] = [];
    private messages: string[] = [];

    register(observer: Observer): void {
        this.observers.push(observer);
    }

    remove(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(): void {
        this.observers.forEach(obs => obs.update(this.messages.at(-1) ?? ''));
    }

    addMessage(message: string): void {
        this.messages.push(message);
        this.notifyObservers();
    }

    getObservers(): Observer[] {
        return this.observers;
    }
}