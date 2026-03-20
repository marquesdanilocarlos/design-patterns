import Component from "@/structural/composite/component";

export default class Directory extends Component{
    private components: Component[] = []

    constructor(name: string, path: string) {
        super(name, path)
    }

    add(component: Component): void {
        this.components.push(component)
    }

    remove(component: Component): void {
        this.components = this.components.filter(component => component !== component)
    }

    getChildren(index: number): Component {
        return this.components[index]
    }

    show(): string {
        let directoryDetails = `${this.name} - [${this.path}] \n`;
        this.components.forEach(component => directoryDetails += component.show())

        return directoryDetails
    }
}