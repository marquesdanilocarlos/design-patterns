import Ride from "@/creational/factory/ride";
import UpdateLocation, {UpdateLocationInput} from "@/creational/factory/update-location";
import {RideRepositoryMemory} from "@/creational/factory/ride-repository";
import {SegmentRepositoryMemory} from "@/creational/factory/segment-repository";
import CalculateFare from "@/creational/factory/calculate-fare";

test('Deve atualizar a localização de uma corrida por distância', async () => {
    const rideRepository = new RideRepositoryMemory()
    const segmentRepository = new SegmentRepositoryMemory()
    const ride = new Ride(-27.584905257808835, -48.545022195325124, new Date())
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