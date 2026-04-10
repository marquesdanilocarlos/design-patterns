import Aggregate from "@/behavioural/iterator/aggregate";
import Iterator from "@/behavioural/iterator/iterator";
import MatrixIterator from "@/behavioural/iterator/matrix-iterator";

export default class Matrix implements Aggregate{
    private _matrix: any[] = []
    private _actualLine: number = 0
    private _actualColumn: number = 0

    constructor(private _lineQuantity: number, private _columnQuantity: number) {
    }

    createIterator(): Iterator {
        return new MatrixIterator(this)
    }

    addItem(item: any): boolean {
        if (this._actualLine === (this._lineQuantity - 1) && this._actualColumn === this._columnQuantity) {
            return false
        }

        if (this._actualColumn === this._columnQuantity) {
            this._actualColumn = 0
            this._actualLine++
        }

        (this._matrix[this._actualLine] ??= [])[this._actualColumn] = item
        this._actualColumn++
        return true
    }

    getItem(line: number, column: number): any {
        return this._matrix[line][column]
    }

    get lineQuantity() {
        return this._lineQuantity
    }

    get columnQuantity() {
        return this._columnQuantity
    }
}