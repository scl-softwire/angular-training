export class Arrival {

    constructor(public lineNumber: string, public destination: string, public arrivalInSeconds: number) { }

    get arrivalInMinutes(): number {
        return Math.round(this.arrivalInSeconds / 60);
    }
}
