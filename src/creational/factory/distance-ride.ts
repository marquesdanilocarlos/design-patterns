import Ride from "@/creational/factory/ride";
import DistanceSegment from "@/creational/factory/distance-segment";
import Location from "@/creational/factory/location";

export default class DistanceRide extends Ride {
    calculateFare(segments: DistanceSegment[]): number {
        let total = 0
        for (const segment of segments) {
            const distance = segment.getDistance()
            total += distance * 4
        }
        return total
    }

    createSegment(rideId: string, from: Location, to: Location): DistanceSegment {
        return new DistanceSegment(rideId, from, to)
    }
}