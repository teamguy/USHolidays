import { USHolidaysPage } from './app.po';

describe('usholidays App', () => {
  let page: USHolidaysPage;

  beforeEach(() => {
    page = new USHolidaysPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
