import Iterator from "@/behavioural/iterator/iterator";
import Matrix from "@/behavioural/iterator/matrix";

export default class MatrixIterator implements Iterator {
    private _lineIndex: number = 0
    private _columnIndex: number = 0
    private _lineLength: number = 0
    private _columnLength: number = 0

    constructor(private _matrix: Matrix) {
        this._lineLength = _matrix.lineQuantity
        this._columnLength = _matrix.columnQuantity
    }

    hasNext(): boolean {
        return this._lineIndex < this._lineLength;
    }

    next(): any {
        const item = this._matrix.getItem(this._lineIndex, this._columnIndex)
        this.indexIncrement()
        return item
    }

    indexIncrement(): void {
        if (this._columnIndex === (this._columnLength - 1)) {
            this._columnIndex = 0
            this._lineIndex++
        } else {
            this._columnIndex++
        }
    }

}