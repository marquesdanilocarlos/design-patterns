import ComponentPrototype from "@/creational/prototype/documents/component-prototype";
import Title from "@/creational/prototype/documents/title";
import TextBox from "@/creational/prototype/documents/text-box";
import Drawing from "@/creational/prototype/documents/drawing";
import Link from "@/creational/prototype/documents/link";

export default class Document extends ComponentPrototype {

    constructor(
        private _title: Title,
        private _textBox: TextBox,
        private _drawing: Drawing,
        private _link: Link,
    ) {
        super()
    }


    get title(): Title {
        return this._title;
    }

    set title(value: Title) {
        this._title = value;
    }

    get textBox(): TextBox {
        return this._textBox;
    }

    set textBox(value: TextBox) {
        this._textBox = value;
    }

    get drawing(): Drawing {
        return this._drawing;
    }

    set drawing(value: Drawing) {
        this._drawing = value;
    }

    get link(): Link {
        return this._link;
    }

    set link(value: Link) {
        this._link = value;
    }

    clone(): Document {
        const newtitle = this.title.clone()
        const newTextBox = this.textBox.clone()
        const newDrawing = this.drawing.clone()
        const newLink = this.link.clone()
        return new Document(newtitle, newTextBox, newDrawing, newLink)
    }
}