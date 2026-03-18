import Location from "@/creational/factory/location";
import Segment from "@/creational/factory/segment";
import RideRepository from "@/creational/factory/ride-repository";
import SegmentRepository from "@/creational/factory/segment-repository";

export type CalculateFareOutput = {
    fare: number
}

export default class CalculateFare {
    constructor(
        private readonly rideRepository: RideRepository,
        private readonly segmentRepository: SegmentRepository
    ) {}

    async execute(rideId: string): Promise<CalculateFareOutput> {
        const ride = await this.rideRepository.getRideById(rideId)
        const segments = await this.segmentRepository.listByRideId(rideId)
        const fare = ride.calculateFare(segments)
        return {fare}
    }
}