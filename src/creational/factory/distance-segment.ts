import Segment from "@/creational/factory/segment";

export default class DistanceSegment extends Segment {
    getDistance(): number {
        const earthRadius = 6371;
        const degreesToRadians = Math.PI / 180;
        const deltaLat = (this.to.coord.latitude - this.from.coord.latitude) * degreesToRadians;
        const deltaLon = (this.to.coord.longitude - this.from.coord.longitude) * degreesToRadians;
        const a =
            Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
            Math.cos(this.from.coord.latitude * degreesToRadians) *
            Math.cos(this.to.coord.latitude * degreesToRadians) *
            Math.sin(deltaLon / 2) *
            Math.sin(deltaLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return Math.round(earthRadius * c);
    }
}