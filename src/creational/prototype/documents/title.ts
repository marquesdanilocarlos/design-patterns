import ComponentPrototype from "@/creational/prototype/documents/component-prototype";

export default class Title extends ComponentPrototype {
    constructor(private _text: string) {
        super();
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    clone(): Title {
        return new Title(this._text);
    }
}