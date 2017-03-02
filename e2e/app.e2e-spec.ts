import { LimamealAppPage } from './app.po';

describe('limameal-app App', function() {
  let page: LimamealAppPage;

  beforeEach(() => {
    page = new LimamealAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
