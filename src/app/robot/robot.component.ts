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

    execute() {
        this.interpreteUserInputAndInitialize();
        this.navigateTheRobot();
        this.displayOutput();
    }
    interpreteUserInputAndInitialize() {
        let inputArray = this.userInput.split("\n");
        inputArray = inputArray.map(element => element.trim().toUpperCase());
        // Initialize Start position
        this.initializeStartPosition(inputArray[0].split(" ")[1]);
        // Initialize Robot object
        this.robot = new Robot(this.position, inputArray.slice(1));
    }
    initializeStartPosition(input: string) {
        let stringArray = input.split(",");
        this.position = new Position(parseInt(stringArray[0]), parseInt(stringArray[1]),
            stringArray[2]);
        // Display 'in' sign on grid
        this.startCell = this.position.xPosition + "" + this.position.yPosition;
    }
    navigateTheRobot() {
        try {
            this.robot.run();
        }
        catch(error) {
            this.inputInvalid = true;
            return;
        }
        this.inputInvalid = false;
    }
    displayOutput() {
        // Display output in textbox
        this.output = this.robot.position.xPosition + ", " + this.robot.position.yPosition
            + ", " + this.robot.position.facing;
        // Display 'out' sign on grid
        this.endCell = this.robot.position.xPosition + "" + this.robot.position.yPosition;
    }
}