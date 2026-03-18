import Ride from "@/creational/factory/ride";

export default interface RideRepository {
    getRideById(rideId: string): Promise<Ride>
    save(ride: Ride): Promise<void>
    update(ride: Ride): Promise<void>
}

export class RideRepositoryMemory implements RideRepository {
    private readonly _rides: Ride[] = []

    constructor() {
        this._rides = []
    }

    async getRideById(rideId: string): Promise<Ride> {
        const ride = this._rides.find(ride => ride.rideId === rideId)
        if (!ride) {
            throw new Error('Corrida não encontrada')
        }
        return ride
    }

    async save(ride: Ride): Promise<void> {
        this._rides.push(ride)
    }

    async update(ride: Ride): Promise<void> {
        const index = this._rides.findIndex(r => r.rideId === ride.rideId)
        if (index === -1) {
            throw new Error('Corrida não encontrada')
        }
        this._rides[index] = ride
    }

    get rides(): Ride[] {
        return this._rides;
    }
}