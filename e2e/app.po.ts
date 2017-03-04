import { browser, element, by } from 'protractor';

export class LimamealAppPage {

  navigateTo() {
    return browser.get('/');
  }

  getNavTitleText() {
    return element(by.id('test-nav-title')).getText();
  }
}
