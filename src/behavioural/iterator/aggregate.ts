import Iterator from "@/behavioural/iterator/iterator";

export default interface Aggregate {
    createIterator(): Iterator
}