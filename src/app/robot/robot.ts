import { Position } from './position';
import { AppConstants, DIRECTIONS, MOVEMENTS } from '../app.constants';

export class Robot {
    movementInstructions: string[];
    position: Position;

    constructor (startPosition: Position, movements: string[]) {
        this.position = startPosition;
        this.movementInstructions = movements;
    }
    run () {
        for (let eachMove of this.movementInstructions) {
            switch(eachMove) {
                case (MOVEMENTS.MOVE): {
                    this.position.moveByOneStep();
                    break;
                }
                case (MOVEMENTS.LEFT):
                case (MOVEMENTS.RIGHT): {
                    this.position.rotateRightOrLeft(eachMove);
                    break;
                }
                case (MOVEMENTS.REPORT): {
                    return;
                }
                default: {
                    throw new Error(AppConstants.INPUT_NOT_RIGHT);
                }
            }
        }
        // Execution is not supposed to reach here
        throw new Error(AppConstants.INPUT_NOT_RIGHT);
    }
}