import { async } from '@angular/core/testing';

import { Robot } from './robot';
import { Position } from './position';
import { AppConstants, DIRECTIONS, MOVEMENTS } from '../app.constants';

describe('Position', () => {
    it('should get instantiated correctly', async(() => {
        let position = new Position(0, 0, DIRECTIONS.NORTH);
        expect(position.xPosition).toBe(0);
        expect(position.yPosition).toBe(0);
        expect(position.facing).toBe(DIRECTIONS.NORTH);
    }));
    it('should turn right correctly', async(() => {
        let position = new Position(0, 0, DIRECTIONS.NORTH);
        position.rotateRightOrLeft(MOVEMENTS.RIGHT);
        expect(position.facing).toBe(DIRECTIONS.EAST);
    }));
    it('should turn left correctly', async(() => {
        let position = new Position(0, 0, DIRECTIONS.NORTH);
        position.rotateRightOrLeft(MOVEMENTS.LEFT);
        expect(position.facing).toBe(DIRECTIONS.WEST);
    }));
    it('should move correctly', async(() => {
        let position = new Position(0, 0, DIRECTIONS.NORTH);
        position.moveByOneStep();
        expect(position.xPosition).toBe(0);
        expect(position.yPosition).toBe(1);
        expect(position.facing).toBe(DIRECTIONS.NORTH);
    }));
});


