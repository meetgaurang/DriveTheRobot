import { async } from '@angular/core/testing';

import { Robot } from './robot';
import { Position } from './position';

describe('Position', () => {
    it('should get instantiated correctly', async(() => {
        let position = new Position(0, 0, "NORTH");
        expect(position.xPosition).toBe(0);
        expect(position.yPosition).toBe(0);
        expect(position.facing).toBe("NORTH");
    }));
});


