import UpdateLocation, {UpdateLocationInput} from "@/creational/factory/update-location";
import {RideRepositoryMemory} from "@/creational/factory/ride-repository";
import {SegmentRepositoryMemory} from "@/creational/factory/segment-repository";
import CalculateFare from "@/creational/factory/calculate-fare";
import DistanceRide from "@/creational/factory/distance-ride";
import TimeRide from "@/creational/factory/time-ride";

test('Deve atualizar a localização de uma corrida por distância', async () => {
    const rideRepository = new RideRepositoryMemory()
    const segmentRepository = new SegmentRepositoryMemory()
    const ride = new DistanceRide(-27.584905257808835, -48.545022195325124, new Date())
    await rideRepository.save(ride)
    const updateLocation = new UpdateLocation(rideRepository, segmentRepository)
    const input: UpdateLocationInput = {
        rideId: ride.rideId,
        latitude: -27.496887588317275,
        longitude: -48.522234807851476,
        date: new Date(),
    }

    await updateLocation.execute(input)
    const calculateFare = new CalculateFare(rideRepository, segmentRepository)
    const output = await calculateFare.execute(ride.rideId)
    expect(output.fare).toBe(40)
})


test('Deve atualizar a localização de uma corrida por tempo', async () => {
    const rideRepository = new RideRepositoryMemory()
    const segmentRepository = new SegmentRepositoryMemory()
    const ride = new TimeRide(-27.584905257808835, -48.545022195325124, new Date('2026-03-18T10:00:00'))
    await rideRepository.save(ride)
    const updateLocation = new UpdateLocation(rideRepository, segmentRepository)
    const input: UpdateLocationInput = {
        rideId: ride.rideId,
        latitude: -27.496887588317275,
        longitude: -48.522234807851476,
        date: new Date('2026-03-18T12:00:00'),
    }

    await updateLocation.execute(input)
    const calculateFare = new CalculateFare(rideRepository, segmentRepository)
    const output = await calculateFare.execute(ride.rideId)
    expect(output.fare).toBe(120)
})