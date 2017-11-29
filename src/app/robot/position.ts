import {AppConstants, DIRECTIONS, MOVEMENTS} from "../app.constants";

export class Position {
    xPosition: number;
    yPosition: number;
    facing: string;

    constructor(xPosition: number, yPosition: number, facing: string) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.facing = facing.toUpperCase();
    }
    public rotateRightOrLeft (direction: string) {
        switch (this.facing) {
            case DIRECTIONS.NORTH : {
                this.facing = direction === MOVEMENTS.RIGHT ?  DIRECTIONS.EAST : DIRECTIONS.WEST;
                break;
            }
            case DIRECTIONS.SOUTH : {
                this.facing = direction === MOVEMENTS.RIGHT ? DIRECTIONS.WEST : DIRECTIONS.EAST;
                break;
            }
            case DIRECTIONS.EAST : {
                this.facing = direction === MOVEMENTS.RIGHT ? DIRECTIONS.SOUTH : DIRECTIONS.NORTH;
                break;
            }
            case DIRECTIONS.WEST : {
                this.facing = direction === MOVEMENTS.RIGHT ? DIRECTIONS.NORTH : DIRECTIONS.SOUTH;
                break;
            }
            default : {
                throw new Error(AppConstants.INPUT_NOT_RIGHT);
            }
        }
    }
    public moveByOneStep() {
        switch (this.facing) {
            case DIRECTIONS.NORTH: {
                if (this.yPosition !== AppConstants.SQUARE_SIZE - 1) {
                    this.yPosition++;
                }
                break;
            }
            case DIRECTIONS.SOUTH: {
                if (this.yPosition !== 0) {
                    this.yPosition--;
                }
                break;
            }
            case DIRECTIONS.EAST: {
                if (this.xPosition !== AppConstants.SQUARE_SIZE - 1) {
                    this.xPosition++;
                }
                break;
            }
            case DIRECTIONS.WEST: {
                if (this.xPosition !== 0) {
                    this.xPosition--;
                }
                break;
            }
            default: {
                throw new Error(AppConstants.INPUT_NOT_RIGHT);
            }
        }
    }
}   