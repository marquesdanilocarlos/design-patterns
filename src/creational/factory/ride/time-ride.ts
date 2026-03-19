import Ride from "@/creational/factory/ride/ride";
import TimeSegment from "@/creational/factory/ride/time-segment";
import Location from "@/creational/factory/ride/location";

export default class TimeRide extends Ride {
    calculateFare(segments: TimeSegment[]): number {
        let total = 0
        for (const segment of segments) {
            const distance = segment.getDiffInMinutes()
            total += distance
        }
        return total
    }

    createSegment(from: Location, to: Location): TimeSegment {
        return new TimeSegment(this.rideId, from, to)
    }

    static create(latitude: number, longitude: number, date: Date): TimeRide {
        const rideId = crypto.randomUUID()
        return new TimeRide(rideId, latitude, longitude, date)
    }
}