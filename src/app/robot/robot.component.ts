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
    // User input validity flag
    inputInvalid: boolean = false;

    navigateTheRobot() {
        // Interprete the user input
        let inputArray = this.userInput.split("\n");
        inputArray = inputArray.map(element => element.trim());
        this.initializeStartPosition(inputArray[0].split(" ")[1]);
        // Start playing with the 'Robot' object
        this.robot = new Robot(this.position, inputArray.slice(1));
        try {
            this.robot.move();
        }
        catch(error) {
            this.inputInvalid = true;
            return;
        }
        this.inputInvalid = false;
        // Display output in textbox
        this.output = this.robot.finalPosition.xPosition + ", " + this.robot.finalPosition.yPosition
            + ", " + this.robot.finalPosition.facing;
        // Display 'out' sign on grid
        this.endCell = this.robot.finalPosition.xPosition + "" + this.robot.finalPosition.yPosition;
    }
    initializeStartPosition(input: string) {
        let stringArray = input.split(",");
        this.position = new Position(parseInt(stringArray[0]), parseInt(stringArray[1]),
            stringArray[2]);
        // Display 'in' sign on grid
        this.startCell = this.position.xPosition + "" + this.position.yPosition;
    }
}