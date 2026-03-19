import Ride from "@/creational/factory/ride/ride";
import DistanceSegment from "@/creational/factory/ride/distance-segment";
import Location from "@/creational/factory/ride/location";

export default class DistanceRide extends Ride {
    calculateFare(segments: DistanceSegment[]): number {
        let total = 0
        for (const segment of segments) {
            const distance = segment.getDistance()
            total += distance * 4
        }
        return total
    }

    createSegment(from: Location, to: Location): DistanceSegment {
        return new DistanceSegment(this.rideId, from, to)
    }

    static create(latitude: number, longitude: number, date: Date): DistanceRide {
        const rideId = crypto.randomUUID()
        return new DistanceRide(rideId, latitude, longitude, date)
    }
}