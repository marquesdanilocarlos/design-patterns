import Segment from "@/creational/factory/segment";

export default interface SegmentRepository {
    save(ride: Segment): Promise<void>
    listByRideId(rideId: string): Promise<Segment[]>
}

export class SegmentRepositoryMemory implements SegmentRepository {
    private _segments: Segment[] = []

    constructor() {
        this._segments = []
    }

    async save(ride: Segment): Promise<void> {
        this._segments.push(ride)
    }

    async listByRideId(rideId: string): Promise<Segment[]> {
        return this._segments.filter(segment => segment.rideId === rideId)
    }

    get segments(): Segment[] {
        return this._segments;
    }
}