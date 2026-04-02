import Observer from "@/behavioural/observer/newsletter/observer";

export default class Email {
    static sendMail(observer: Observer, message: string) {
        return `Email enviado para ${observer.getName()} - ${observer.getEmail()}: ${message}`
    }
}