import Iterator from "@/behavioural/iterator/iterator";
import List from "@/behavioural/iterator/list";

export default class ListIterator implements Iterator {
    private _index: number = 0
    private _length: number = 0

    constructor(private _list: List) {
        this._length = _list.length
    }

    hasNext(): boolean {
        if (this._index >= this._length) {
            return false
        }

        return true
    }

    next(): any {
        const item = this._list.getItem(this._index)
        this._index++
        return item
    }

}