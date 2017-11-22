import { Position } from './position';
import { AppConstants } from '../app.constants';

export class Robot {
    initialPosition: Position;
    movementInstructions: string[];
    finalPosition: Position;

    constructor (startPosition: Position, movements: string[]) {
        this.initialPosition = new Position();
        this.initialPosition.xPosition = startPosition.xPosition;
        this.initialPosition.yPosition = startPosition.yPosition;
        this.initialPosition.facing = startPosition.facing;
        
        this.finalPosition = new Position();
        this.finalPosition.xPosition = startPosition.xPosition;
        this.finalPosition.yPosition = startPosition.yPosition;
        this.finalPosition.facing = startPosition.facing;

        this.movementInstructions = movements;
    }

    move (): Position {
        for (let eachMove of this.movementInstructions) {
            if (eachMove.toUpperCase() === "MOVE") {
                if (this.finalPosition.facing.toUpperCase() === "NORTH") {
                    if (this.finalPosition.yPosition < 4) {
                        this.finalPosition.yPosition++;
                    }
                }
                else if (this.finalPosition.facing.toUpperCase() === "SOUTH") {
                    if (this.finalPosition.yPosition > 0) {
                        this.finalPosition.yPosition--;
                    }
                }
                else if (this.finalPosition.facing.toUpperCase() === "EAST") {
                    if (this.finalPosition.xPosition < 4) {
                        this.finalPosition.xPosition++;
                    }
                }
                else if (this.finalPosition.facing.toUpperCase() === "WEST") {
                    if (this.finalPosition.xPosition > 0) {
                        this.finalPosition.xPosition--;
                    }
                }
                else {
                    throw new Error(AppConstants.INPUT_NOT_RIGHT);
                }
            }
            else if(eachMove.toUpperCase() === "RIGHT") {
                if (this.finalPosition.facing.toUpperCase() === "NORTH") {
                    this.finalPosition.facing = "EAST";
                }
                else if (this.finalPosition.facing.toUpperCase() === "SOUTH") {
                    this.finalPosition.facing = "WEST";
                }
                else if (this.finalPosition.facing.toUpperCase() === "EAST") {
                    this.finalPosition.facing = "SOUTH";
                }
                else if (this.finalPosition.facing.toUpperCase() === "WEST") {
                    this.finalPosition.facing = "NORTH";
                }
                else {
                    throw new Error(AppConstants.INPUT_NOT_RIGHT);
                }
            }
            else if(eachMove.toUpperCase() === "LEFT") {
                if (this.finalPosition.facing.toUpperCase() === "NORTH") {
                    this.finalPosition.facing = "WEST";
                }
                else if (this.finalPosition.facing.toUpperCase() === "SOUTH") {
                    this.finalPosition.facing = "EAST";
                }
                else if (this.finalPosition.facing.toUpperCase() === "EAST") {
                    this.finalPosition.facing = "NORTH";
                }
                else if (this.finalPosition.facing.toUpperCase() === "WEST") {
                    this.finalPosition.facing = "SOUTH";
                }
                else {
                    throw new Error(AppConstants.INPUT_NOT_RIGHT);
                }
            }
            else if(eachMove.toUpperCase() === "REPORT") {
                return;
            }
            else {
                throw new Error(AppConstants.INPUT_NOT_RIGHT);
            }
        }
        throw new Error(AppConstants.INPUT_NOT_RIGHT);
    }
}