import Location from "@/creational/factory/location";
import DistanceRide from "@/creational/factory/distance-ride";
import TimeRide from "@/creational/factory/time-ride";
import DistanceSegment from "@/creational/factory/distance-segment";
import TimeSegment from "@/creational/factory/time-segment";

test('Deve criar e calcular a tarifa de uma corrida por distância', async () => {
    const ride = new DistanceRide(-27.584905257808835, -48.545022195325124, new Date('2026-03-18T10:00:00'))
    const lastLocation = new Location(-27.584905257808835, -48.545022195325124, new Date('2026-03-18T10:00:00'))
    const newLocation = new Location(-27.496887588317275, -48.522234807851476, new Date('2026-03-18T12:00:00'))
    const segment = ride.createSegment(ride.rideId, lastLocation, newLocation)
    ride.updateLocation(newLocation)
    const fare = ride.calculateFare([segment])
    expect(fare).toBe(40)
})


test('Deve criar e calcular a tarifa de uma corrida por tempo', async () => {
    const ride = new TimeRide(-27.584905257808835, -48.545022195325124, new Date('2026-03-18T10:00:00'))
    const lastLocation = new Location(-27.584905257808835, -48.545022195325124, new Date('2026-03-18T10:00:00'))
    const newLocation = new Location(-27.496887588317275, -48.522234807851476, new Date('2026-03-18T12:00:00'))
    const segment = ride.createSegment(ride.rideId, lastLocation, newLocation)
    ride.updateLocation(newLocation)
    const fare = ride.calculateFare([segment])
    expect(fare).toBe(120)
})