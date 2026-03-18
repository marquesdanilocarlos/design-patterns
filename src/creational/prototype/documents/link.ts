import ComponentPrototype from "@/creational/prototype/documents/component-prototype";

export default class Link extends ComponentPrototype {
    constructor(private _text: string, private _url: string) {
        super();
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    clone(): Link {
        return new Link(this._text, this._url);
    }
}