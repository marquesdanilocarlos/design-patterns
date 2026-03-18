import ComponentPrototype from "@/creational/prototype/documents/component-prototype";

export default class TextBox extends ComponentPrototype {
    constructor(private _text: string) {
        super();
    }
    
    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    clone(): TextBox {
        return new TextBox(this._text);
    }
}