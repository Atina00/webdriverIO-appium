// buttons.page.ts

class ButtonsPage {
  get buttonsElement() {
    return $('//XCUIElementTypeStaticText[@name="Alert Views"]');
  }

  async getButtonsHeaderText() {
    return this.buttonsElement.getText();
  }

  async clickButtonsElement() {
    await this.buttonsElement.waitForDisplayed({ timeout: 5000 });
    await this.buttonsElement.click();
  }

  async clickYourButton() {
    const yourButton = $('//XCUIElementTypeStaticText[@name="Simple"]');
    await yourButton.waitForDisplayed({ timeout: 5000 });
    await yourButton.click();
  
    // Wait for the popup to be displayed
    const popup = $('//XCUIElementTypeStaticText[@name="A Short Title Is Best"]'); // Replace with the actual selector for the popup
    await popup.waitForDisplayed({ timeout: 5000 });
  
    // Perform actions on the popup
    // For example, if the popup has an OK button:
    const okButton = $('//XCUIElementTypeButton[@name="OK"]'); // Replace with the actual selector for the OK button
    await okButton.waitForDisplayed({ timeout: 5000 });
    await okButton.click();
  
    // Optionally, you can wait for the popup to be dismissed
    await popup.waitForDisplayed({ timeout: 5000, reverse: true });
  }
}

export default ButtonsPage;
