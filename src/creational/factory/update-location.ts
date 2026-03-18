import Location from "@/creational/factory/location";
import Segment from "@/creational/factory/segment";
import RideRepository from "@/creational/factory/ride-repository";
import SegmentRepository from "@/creational/factory/segment-repository";

export type UpdateLocationInput = {
    rideId: string
    latitude: number
    longitude: number
    date: Date
}

export default class UpdateLocation {
    constructor(
        private readonly rideRepository: RideRepository,
        private readonly segmentRepository: SegmentRepository
    ) {}

    async execute(input: UpdateLocationInput): Promise<void> {
        const ride = await this.rideRepository.getRideById(input.rideId)
        const newLocation = new Location(input.latitude, input.longitude, input.date)
        const segment = new Segment(ride.rideId, ride.lastLocation, newLocation)
        await this.rideRepository.update(ride)
        await this.segmentRepository.save(segment)
    }
}