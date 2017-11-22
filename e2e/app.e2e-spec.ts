import { DriveTheRobotPage } from './app.po';

describe('drive-the-robot App', () => {
  let page: DriveTheRobotPage;

  beforeEach(() => {
    page = new DriveTheRobotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
