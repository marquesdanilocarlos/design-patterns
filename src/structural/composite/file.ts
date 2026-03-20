import Component from "@/structural/composite/component";

export default class File extends Component{
    constructor(name: string, path: string) {
        super(name, path)
    }

    show(): string {
        return ` - ${this.name} - [${this.path}] \n`
    }
}