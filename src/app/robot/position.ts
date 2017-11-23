export class Position {
    xPosition: number;
    yPosition: number;
    facing: string;

    constructor(xPosition: number, yPosition: number, facing: string) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.facing = facing;
    }
}