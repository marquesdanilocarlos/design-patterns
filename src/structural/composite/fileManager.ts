import Component from "@/structural/composite/component";

export default class FileManager {

    constructor(private root: Component) {
    }

    showAll(): string {
        return this.root.show()
    }
}