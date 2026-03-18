import ComponentPrototype from "@/creational/prototype/documents/component-prototype";

export default class Drawing extends ComponentPrototype {
    constructor(private _shape: 'circle' | 'square' | 'triangle') {
        super()
    }
    
    get shape(): "circle" | "square" | "triangle" {
        return this._shape;
    }

    set shape(value: "circle" | "square" | "triangle") {
        this._shape = value;
    }

    clone(): Drawing {
        return new Drawing(this._shape);
    }
}