import Segment from "@/creational/factory/segment";

export default class TimeSegment extends Segment {
    getDiffInMinutes() {
        const diff = this.to.date.getTime() - this.from.date.getTime()
        return Math.round(diff / (1000 * 60))
    }
}