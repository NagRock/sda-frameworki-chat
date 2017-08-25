import {browser, by, element} from 'protractor';

describe('chat App', () => {
  beforeEach(() => {
    browser.ignoreSynchronization = true;
    browser.get('/');
  });

  it('should display login label', () => {
    const loginLabel = element(by.tagName('h3'));
    expect(loginLabel.getText()).toEqual('Login:');
  });

  describe('login button', () => {
    it('should be disabled when login input field is empty', () => {
      const inputField = element(by.tagName('input'));
      inputField.clear();
      const loginButton = element(by.tagName('button'));
      expect(loginButton.isEnabled()).toBeFalsy();
    });
  });
});
