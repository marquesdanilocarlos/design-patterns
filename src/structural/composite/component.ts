export default abstract class Component {
    constructor(private _name: string, private _path: string) {
    }

    add (component: Component): void {
        throw new Error('Unsupported operation')
    }

    remove (component: Component): void {
        throw new Error('Unsupported operation')
    }

    getChildren(index: number): Component {
        throw new Error('Unsupported operation')
    }

    abstract show(): string

    get name(): string {
        return this._name;
    }

    get path(): string {
        return this._path;
    }
}