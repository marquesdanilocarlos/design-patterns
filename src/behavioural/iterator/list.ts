import Aggregate from "@/behavioural/iterator/aggregate";
import Iterator from "@/behavioural/iterator/iterator";
import ListIterator from "@/behavioural/iterator/list-iterator";

export default class List implements Aggregate{
    private _list: any[] = []

    constructor(private _length: number) {
    }

    createIterator(): Iterator {
        return new ListIterator(this);
    }

    addItem(item: any): boolean {
        if (this._list.length > this._length) {
            return false
        }

        this._list.push(item)
        return true
    }

    getItem(index: number): any {
        return this._list[index]
    }

    get length(): number {
        return this._length
    }
}