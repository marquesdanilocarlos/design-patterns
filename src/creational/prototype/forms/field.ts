import Prototype from "@/creational/prototype/forms/prototype";
import * as crypto from "node:crypto";

export default class Field implements Prototype {
    constructor(
        private readonly _fieldId: string,
        private readonly _title: string,
        private readonly _type: string) {
    }

    static create (type: string, title:string) {
        const fieldId = crypto.randomUUID()
        return new Field(fieldId, title, type)
    }

    clone(): Field {
        return new Field(this.fieldId, this.title, this.type)
    }

    get fieldId(): string {
        return this._fieldId;
    }

    get title(): string {
        return this._title;
    }

    get type(): string {
        return this._type;
    }
}