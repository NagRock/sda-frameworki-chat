import {browser, by, element} from 'protractor';
import {Key} from 'selenium-webdriver';

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

    describe('should be enabled', () => {
      it('when login input field has at least 3 characters', () => {
        const inputField = element(by.tagName('input'));
        inputField.clear();
        inputField.sendKeys('Jan');
        const loginButton = element(by.tagName('button'));
        expect(loginButton.isEnabled()).toBeTruthy();
      });
    });

    describe('logging in', () => {
      it('should switch window to chat', () => {
        const inputField = element(by.tagName('input'));
        inputField.clear();
        inputField.sendKeys('Nickname');
        const loginButton = element(by.tagName('button'));
        loginButton.click();
        const chatHeader = element(by.tagName('app-list'));
        expect(chatHeader.isDisplayed()).toBeTruthy();
      });
    });

    describe('sending chat message', () => {
      it('should should be on messages list', () => {
        const inputField = element(by.tagName('input'));
        inputField.clear();
        inputField.sendKeys('Nickname');
        const loginButton = element(by.tagName('button'));
        loginButton.click();
        const chatMessageInputField = element(by.id('chatMessageInputField'));
        chatMessageInputField.sendKeys('Sample message');
        chatMessageInputField.sendKeys(Key.ENTER);
      });
    });
  });
});
