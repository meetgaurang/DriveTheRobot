import { TestBed, async } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WelcomeComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in an h1 tag', async(() => {
    const fixture = TestBed.createComponent(WelcomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Drive the Robot');
  }));
});
