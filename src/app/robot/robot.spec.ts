import { async } from '@angular/core/testing';

import { Robot } from './robot';
import { Position } from './position';
import { AppConstants, DIRECTIONS, MOVEMENTS } from '../app.constants';


describe('Robot', () => {
    it('should get instantiated correctly', async(() => {
        let position = new Position(0, 0, DIRECTIONS.NORTH);
        let robot = new Robot(position, [MOVEMENTS.MOVE, MOVEMENTS.REPORT]);
        expect(robot.position.xPosition).toBe(0);
        expect(robot.position.yPosition).toBe(0);
        expect(robot.position.facing).toBe(DIRECTIONS.NORTH);
    }));
    it('should move correctly', async(() => {
        let position = new Position(0, 0, DIRECTIONS.NORTH);
        let robot = new Robot(position, [MOVEMENTS.MOVE, MOVEMENTS.REPORT]);
        robot.run();
        expect(robot.position.xPosition).toBe(0);
        expect(robot.position.yPosition).toBe(1);
        expect(robot.position.facing).toBe(DIRECTIONS.NORTH);
    }));
    it('should not fall from the table', async(() => {
        let position = new Position(0, 3, DIRECTIONS.NORTH);
        let robot = new Robot(position, [MOVEMENTS.MOVE, MOVEMENTS.MOVE, MOVEMENTS.MOVE, MOVEMENTS.LEFT, MOVEMENTS.REPORT]);
        robot.run();
        expect(robot.position.xPosition).toBe(0);
        expect(robot.position.yPosition).toBe(4);
        expect(robot.position.facing).toBe(DIRECTIONS.WEST);
    }));
    it('should throw exception when given wrong movement instruction', async(() => {
        let position = new Position(0, 3, DIRECTIONS.NORTH);
        let robot = new Robot(position, ["MOVEEE", "LEFT", "REPORT"]);
        try {
            robot.run();
            // Execution flow should never reach here
            expect(0).toBe(1);
        }
        catch(error) {
            expect(error.message).toBe(AppConstants.INPUT_NOT_RIGHT);    
        }
    }));
});


