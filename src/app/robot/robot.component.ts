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
    // To highlight cells
    startCell: string;
    endCell: string;

    navigateTheRobot() {
        // Interprete the user input
        let inputArray = this.userInput.split("\n");
        inputArray = inputArray.map(element => element.trim());
        this.initializeStartPosition(inputArray[0].split(" ")[1]);
        // Start playing with the 'Robot' object
        this.robot = new Robot(this.position, inputArray.slice(1));
        this.robot.move();
        // Display output in textbox
        this.output = this.robot.finalPosition.xPosition + ", " + this.robot.finalPosition.yPosition
            + ", " + this.robot.finalPosition.facing;
        // Display 'out' sign on grid
        this.endCell = this.robot.finalPosition.xPosition + "" + this.robot.finalPosition.yPosition;
    }
    initializeStartPosition(input: string) {
        this.position = new Position();
        // input is expected as PLACE 0,0,NORTH
        let stringArray = input.split(",");
        this.position.xPosition = parseInt(stringArray[0]);
        this.position.yPosition = parseInt(stringArray[1]);
        this.position.facing = stringArray[2];
        // Display 'in' sign on grid
        this.startCell = this.position.xPosition + "" + this.position.yPosition;
    }
}