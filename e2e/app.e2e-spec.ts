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
    describe('should be disabled when login input field', () => {
      it('is empty', () => {
        const inputField = element(by.tagName('input'));
        inputField.clear();
        const loginButton = element(by.tagName('button'));
        expect(loginButton.isEnabled()).toBeFalsy();
      });

      it('has only 2 characters', () => {
        const inputField = element(by.tagName('input'));
        inputField.clear();
        inputField.sendKeys('Ja');
        const loginButton = element(by.tagName('button'));
        expect(loginButton.isEnabled()).toBeFalsy();
      });
    });
  });
});
