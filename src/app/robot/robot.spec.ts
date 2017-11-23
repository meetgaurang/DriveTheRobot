import { async } from '@angular/core/testing';

import { Robot } from './robot';
import { Position } from './position';
import { AppConstants } from '../app.constants';


describe('Robot', () => {
    it('should get instantiated correctly', async(() => {
        let position = new Position(0, 0, "NORTH");
        let robot = new Robot(position, ["MOVE", "REPORT"]);
        expect(robot.initialPosition.xPosition).toBe(0);
        expect(robot.initialPosition.yPosition).toBe(0);
        expect(robot.initialPosition.facing).toBe("NORTH");
    }));
    it('should move correctly', async(() => {
        let position = new Position(0, 0, "NORTH");
        let robot = new Robot(position, ["MOVE", "REPORT"]);
        robot.move();
        expect(robot.finalPosition.xPosition).toBe(0);
        expect(robot.finalPosition.yPosition).toBe(1);
        expect(robot.finalPosition.facing).toBe("NORTH");
    }));
    it('should not fall from the table', async(() => {
        let position = new Position(0, 3, "NORTH");
        let robot = new Robot(position, ["MOVE", "MOVE", "MOVE", "LEFT", "REPORT"]);
        robot.move();
        expect(robot.finalPosition.xPosition).toBe(0);
        expect(robot.finalPosition.yPosition).toBe(4);
        expect(robot.finalPosition.facing).toBe("WEST");
    }));
    it('should throw exception when given wrong movement instruction', async(() => {
        let position = new Position(0, 3, "NORTH");
        let robot = new Robot(position, ["MOVEEE", "LEFT", "REPORT"]);
        try {
            robot.move();
            // Execution flow should never reach here
            expect(0).toBe(1);
        }
        catch(error) {
            expect(error.message).toBe(AppConstants.INPUT_NOT_RIGHT);    
        }
    }));
});


