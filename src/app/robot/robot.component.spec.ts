import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";

import { RobotComponent } from './robot.component';

describe('RobotComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RobotComponent
      ],
      imports: [
          RouterModule,
          FormsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(RobotComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have predefined userInput value`, async(() => {
    const fixture = TestBed.createComponent(RobotComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.userInput).toEqual('PLACE 0,0,NORTH\nMOVE\nREPORT');
  }));
  it('should interprete user input correctly', async(() => {
    const fixture = TestBed.createComponent(RobotComponent);
    fixture.componentInstance.initializeStartPosition("0,0,NORTH");
    expect(fixture.componentInstance.position.xPosition).toEqual(0);
    expect(fixture.componentInstance.position.yPosition).toEqual(0);
    expect(fixture.componentInstance.position.facing).toEqual("NORTH");
  }))
});
