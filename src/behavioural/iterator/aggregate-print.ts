import Aggregate from "@/behavioural/iterator/aggregate";

export default class AggregatePrint {
    static iterate(aggregate: Aggregate) {
        const result: any[] = []
        const iterator = aggregate.createIterator()
        while (iterator.hasNext()) {
            result.push(iterator.next())
        }

        return result
    }
}