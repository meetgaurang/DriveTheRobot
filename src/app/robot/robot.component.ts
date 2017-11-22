import { Component } from '@angular/core';
import { Position } from './position';
import { Robot } from './robot';

@Component({
    templateUrl: "robot.component.html",
    selector: "robot-play",
    styleUrls: ['./robot.component.css']
})
export class RobotComponent {
    userInput: string = "PLACE 0,0,NORTH\nMOVE\nREPORT";
    output: string;
    position: Position;
    robot: Robot;

    navigateTheRobot() {
        let inputArray = this.userInput.replace(/\n/g, " ").split(" ");
        this.initializeStartPosition(inputArray[1].trim());
        this.robot = new Robot(this.position, inputArray.slice(2));
        this.robot.move();
        // Display output
        this.output = this.robot.finalPosition.xPosition + ", " + this.robot.finalPosition.yPosition
            + ", " + this.robot.finalPosition.facing;
    }
    initializeStartPosition(input: string) {
        this.position = new Position();
        // input is expected as PLACE 0,0,NORTH
        let stringArray = input.split(",");
        this.position.xPosition = parseInt(stringArray[0]);
        this.position.yPosition = parseInt(stringArray[1]);
        this.position.facing = stringArray[2];
    }
}