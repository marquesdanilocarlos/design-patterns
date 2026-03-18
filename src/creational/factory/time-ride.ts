import Ride from "@/creational/factory/ride";
import TimeSegment from "@/creational/factory/time-segment";
import Location from "@/creational/factory/location";

export default class TimeRide extends Ride {
    calculateFare(segments: TimeSegment[]): number {
        let total = 0
        for (const segment of segments) {
            const distance = segment.getDiffInMinutes()
            total += distance
        }
        return total
    }

    createSegment(rideId: string, from: Location, to: Location): TimeSegment {
        return new TimeSegment(rideId, from, to)
    }

}