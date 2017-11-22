export class Robot {
    xPosition: number;
    yPosition: number;
    facing: string;

    constructor (x: number, y: number, f: string) {
        this.xPosition = x;
        this.yPosition = y;
        this.facing = f;
    }
}