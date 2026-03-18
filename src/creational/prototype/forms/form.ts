import Field from "@/creational/prototype/forms/field";
import Prototype from "@/creational/prototype/forms/prototype";

export default class Form implements Prototype{
    public fields: Field[] = []

    constructor(
        private _formId: string,
        private _category: string,
        private _description: string
    ) {}

    addField (type: string, title: string) {
        this.fields.push(Field.create(type, title));
    }

    clone(): Form {
        const clone = new Form(this.formId, this.category, this.description);
        for (const field of this.fields) {
            clone.fields.push(
                field.clone()
            )
        }
        return clone
    }

    get formId(): string {
        return this._formId;
    }

    get category(): string {
        return this._category;
    }

    get description(): string {
        return this._description;
    }

    set formId(value: string) {
        this._formId = value;
    }

    set category(value: string) {
        this._category = value;
    }

    set description(value: string) {
        this._description = value;
    }
}