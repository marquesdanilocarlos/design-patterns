import Ride from "@/creational/factory/ride";
import Location from "@/creational/factory/location";
import Segment from "@/creational/factory/segment";

test('Deve criar uma corrida', async () => {
    const ride = new Ride(-27.584905257808835, -48.545022195325124, new Date('2026-03-18T10:00:00'))
    const lastLocation = new Location(-27.584905257808835, -48.545022195325124, new Date('2026-03-18T10:00:00'))
    const newLocation = new Location(-27.496887588317275, -48.522234807851476, new Date('2026-03-18T12:00:00'))
    const segment = new Segment(ride.rideId, lastLocation, newLocation)
    ride.updateLocation(newLocation)
    const fare = ride.calculateFare([segment])
    expect(fare).toBe(40)
})