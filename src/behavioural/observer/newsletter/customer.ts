import Observer from "@/behavioural/observer/newsletter/observer";
import Subject from "@/behavioural/observer/newsletter/subject";
import Email from "@/behavioural/observer/newsletter/email";

export default class Customer implements Observer {

    constructor(
        private name: string,
        private email: string,
        private subject: Subject
    ) {
        this.subject.register(this);
    }

    getEmail(): string {
        return this.email;
    }

    getName(): string {
        return this.name;
    }

    update(message: string): void {
        Email.sendMail(this, message);
    }

}