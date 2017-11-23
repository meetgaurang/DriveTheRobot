# Drive The Robot
<img src="../master/src/assets/robot_logo.jpg" width="200px"/>

This solution is an Angular 2+ based Web application to solve the Robot puzzle as mentioned [here](https://github.com/meetgaurang/DriveTheRobot/blob/master/PROBLEM-STATEMENT.md).

## Technologies Used

Angular 5, Typescript, Jasmine and Karma (for Unit Test,) HTML5, CSS3

## How to Run this App

* Install the Angular-CLI globally by running following command. Ignore if already installed.
`npm install -g @angular/cli`

* Clone this GIT repository on local machine

* Go inside project directory by running `cd DriveTheRobot`

* Install npm packages by running `npm install` command,

* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## How this App Works

1) The Welcome page. Just click on 'Play' button
![](../master/src/assets/screenshot/welcome.png)

2) The main puzzle page. Enter input as per defined rule. Click on 'Drive the Robot' button to see the answer in 'output' field.
![](../master/src/assets/screenshot/Input.png)

3) You could see the answer in 'Output' textbox. Also, you could see answer in graphical form inside the grid.
![](../master/src/assets/screenshot/output.png)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
