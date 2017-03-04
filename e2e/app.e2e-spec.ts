import { LimamealAppPage } from './app.po';

describe('limameal-app App', function() {
  let page: LimamealAppPage;

  beforeEach(() => {
    page = new LimamealAppPage();
  });

  it('should display navigation bar title', () => {
    page.navigateTo();
    expect(page.getNavTitleText()).toEqual('limameal');
  });
});
